<!DOCTYPE html>
<html>
<head>
<title>ランダムクイズ</title>
<style>
/* (前述のCSSと同じ) */
</style>
</head>
<body>

<div id="quiz-area">
  <div id="question"></div>
  <div class="options">
    <button id="option1"></button>
    <button id="option2"></button>
    <button id="option3"></button>
    <button id="option4"></button>
  </div>
  <div id="result"></div>
  <button id="next-question">次の質問</button>
</div>

<script>
const questions = [
  {
    question: "日本の首都は？",
    options: ["東京", "京都", "大阪", "福岡"],
    answer: 0
  },
  {
    question: "世界で一番高い山は？",
    options: ["エベレスト", "富士山", "キリマンジャロ", "マッキンリー"],
    answer: 0
  },
    {
    question: "太陽は何色？",
    options: ["黄色", "赤色", "青色", "緑色"],
    answer: 0
  },
    {
    question: "世界で一番大きな海は？",
    options: ["太平洋", "大西洋", "インド洋", "北極海"],
    answer: 0
  }
];

const questionElement = document.getElementById("question");
const optionElements = [
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4")
];
const nextButton = document.getElementById("next-question");
const resultElement = document.getElementById("result");
let currentQuestionIndex;

function showQuestion() {
    resultElement.textContent = "";
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].classList.remove("correct", "incorrect");
        optionElements[i].textContent = ""; // ボタンテキストをクリア
        optionElements[i].style.display = "none"; // 一旦すべて非表示
        optionElements[i].removeEventListener("click", checkAnswer); // イベントリスナーを削除
    }

    do {
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
    } while (currentQuestionIndex === showQuestion.previousIndex && questions.length > 1);
    showQuestion.previousIndex = currentQuestionIndex;

  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < currentQuestion.options.length; i++) { // 必要な数だけ表示
        optionElements[i].textContent = currentQuestion.options[i];
        optionElements[i].style.display = "block";
        optionElements[i].addEventListener("click", checkAnswer);
    }
}

function checkAnswer(event) {
    const selectedOptionIndex = optionElements.indexOf(event.target);
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOptionIndex === currentQuestion.answer) {
        resultElement.textContent = "正解！賢い！";
        event.target.classList.add("correct");
    } else {
        resultElement.textContent = "不正解！";
        event.target.classList.add("incorrect");
    }
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].removeEventListener("click", checkAnswer);
    }
}

nextButton.addEventListener("click", showQuestion);
showQuestion();
</script>

</body>
</html>
