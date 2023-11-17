var questions = [
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Что такое HTML?",
        options: ["Гипертекстовый язык разметки", "Язык программирования", "База данных", "Графический редактор"],
        correctAnswer: "Гипертекстовый язык разметки"
    },
    {
        question: "Что такое CSS?",
        options: ["Каскадные таблицы стилей", "Язык программирования", "Система управления базами данных", "Фреймворк"],
        correctAnswer: "Каскадные таблицы стилей"
    }
];
var currentQuestion = 0; // Текущий вопрос
var correctAnswers = 0; // Количество правильных ответов
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); // Генерируем случайный индекс 
        [array[i], array[j]] = [array[j], array[i]]; // Обмен местами элементов 
    }
    return array;
}

function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++; // Увеличиваем счетчик правильных ответов
    }
    currentQuestion++; // Переходим к следующему вопросу
    if (currentQuestion < questions.length) {
        displayQuestion(); // Отображаем следующий вопрос
    } else {
        displayResult(); // Отображаем результат теста
    }
}

function displayQuestion() {
    var questionElement = document.getElementById("question"); // Получаем блок
    questionElement.textContent = "Вопрос " + (currentQuestion + 1) + ": " +
        questions[currentQuestion].question; // Размещаем вопрос
    var optionsElement = document.getElementById("options"); // Получаем блоки
    optionsElement.innerHTML = "";
    var shuffledOptions = shuffleArray(questions[currentQuestion].options);
    for (var i = 0; i < shuffledOptions.length; i++) { // Создаем кнопки сSnextQuestion
        var option = shuffledOptions[i];
        optionsElement.innerHTML += `<button 
        onclick="nextQuestion('${option}')">${option}</button>`;
    }
}

function displayResult() {
    // Получаем id необходимых блоков
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var resultElement = document.getElementById("result");
    questionElement.style.display = "none";// Выключаем видимость блока вопроса
    optionsElement.style.display = "none";// Выключаем видимость блоков ответов
    resultElement.textContent = "Правильных ответов: " + correctAnswers + " из " +
        questions.length;
    resultElement.style.display = "block"; // Отображаем результат
}

// Начало теста
displayQuestion(); // Запускаем отображение первого вопроса