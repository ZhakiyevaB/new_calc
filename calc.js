// Получение всех необходимых элементов из DOM
const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

// Инициализация переменной operation для хранения текущей операции
let operation = "+";

// Функция для вывода результата на страницу и установки цвета в зависимости от значения
function getResult(value) {
    if (value < 0) {
        result.style.color = 'red';
    } else {
        result.style.color = 'green';
    }
    result.textContent = value;
}

// Обработчики событий для кнопок операций
plus.onclick = function() {
    operation = "+";
}

minus.onclick = function() {
    operation = "-";
}

multiply.onclick = function() {
    operation = "*";
}

divide.onclick = function() {
    operation = "/";
}

// Обработчик события для кнопки "Calculate"
calculate.onclick = function() {
    // Получение чисел из инпутов
    const num1 = Number(firstInput.value);
    const num2 = Number(secondInput.value);
    let output;

    // Выполнение операции в зависимости от текущей выбранной операции
    switch (operation) {
        case "+":
            output = num1 + num2;
            break;
        case "-":
            output = num1 - num2;
            break;
        case "*":
            output = num1 * num2;
            break;
        case "/":
            // Проверка деления на ноль
            if (num2 !== 0) {
                output = num1 / num2;
            } else {
                output = "Cannot divide by zero";
            }
            break;
        default:
            output = "Invalid operation";
    }

    // Вывод результата
    getResult(output);
}
