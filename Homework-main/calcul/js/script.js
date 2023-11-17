function addTextToInput(anElement) {
    var text = document.getElementById('num1').value;
    text += anElement.innerText;
    document.getElementById('num1').value = text;
}

function addTextToInput2(anElement) {
    var text = document.getElementById('num2').value;
    text += anElement.innerText;
    document.getElementById('num2').value = text;
}

// переменная, в которой хранится выбранное математическое действие
var op;

// функция расчёта
function func() {
    // переменная для результата
    var result;
    // получаем первое и второе число
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    // смотрим, что было в переменной с действием, и действуем исходя из этого
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    // отправляем результат на страницу
    resultInput = document.getElementById('result');
    resultInput.value = result;
}