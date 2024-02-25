/* document.getElementById("add_task").addEventListener("click", function() {
    const taskTitleInput = document.getElementById("task_title_input");
    const taskTitle = taskTitleInput.value.trim();

    if (taskTitle !== "") {
        const list = document.getElementById("list");
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between";
        listItem.innerHTML = `
            <span>${taskTitle}</span>
            <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
            </span>
        `;
        list.appendChild(listItem);

        taskTitleInput.value = "";
    } else {
        alert("Please enter a task title.");
    }
});
 */

/* document.getElementById("add_task").addEventListener("click", function() {
    const taskTitle = document.getElementById("task_title_input").value.trim();
    if (taskTitle) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between";
        listItem.innerHTML = `
            <span>${taskTitle}</span>
            <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
            </span>
        `;
        document.getElementById("list").appendChild(listItem);
        document.getElementById("task_title_input").value = "";
    } else {
        alert("Please enter a task title.");
    }
}); */

const taskTitleInput = document.getElementById('task_title_input')
const addTaskButton = document.getElementById('add_task')
const listElement = document.getElementById('list')



function render() {
    //  Очищаем элемент чтобы не добавились старые таски
    listElement.innerHTML = ''
    if (tasks.length == 0) {
        listElement.innerHTML = '<span></span>'
    }
    // index нам нужен для того чтобы определить какую таску мы меням на выполненый (невыполненый) или удалить
    for (let i=0; i<tasks.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getListElement(tasks[i], i))   
    }
}

addTaskButton.onclick = function() {
    if (taskTitleInput.value.length == 0) {
        return
    }
    const newTask = {
        title: taskTitleInput.value,
        isCompleted: false,
    }
    tasks.push(newTask)
    render()
    // Очищаем поле ввода после добавления новой таски
    taskTitleInput.value = ''
}

listElement.onclick = function(event){
    // при клике на элемент браузер выполняет след. код
    
    // Раскоментируйте потом код ниже и посмотрите что будет при клике на текст таски затем на кнопки, куда мы добавили data 
    // параметры (data-index, data-type)
    // console.log(event.target.dataset)
    
    if (event.target.dataset.index) {
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type == 'toggle') {
            console.log('toggle', index)
            tasks[index].isCompleted = !tasks[index].isCompleted
        } else if (type === 'remove') {
            console.log('remove', index)
            tasks.splice(index, 1)
        }
        render()
    }
}

const getListElement = function(task, index) {
    // data-index - параметр для тега в html для идентификации элемента
    // data-type - параметр для тега в html для того чтобы отнести к тому или иному типу элемента
    return `
    <li class="list-group-item d-flex justify-content-between">
      <span class="${task.isCompleted ? 'text-decoration-line-through' : ''}">${task.title}</span>
      <span>
        <span class="btn btn-small btn-${task.isCompleted ? 'warning':'success'}" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
      </span>
    </li>
    `
}

render()