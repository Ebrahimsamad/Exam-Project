import testData from "./helper.js";

function shuffleArray() {
  let array = [...questions];

  return array.sort(() => Math.random() - 0.5);
}

let questions = testData();
questions = shuffleArray(questions);
// i will store users answers here by pushing the index of the question and it's answer
let userAnswers = {};

const questionDiv = document.querySelector("#questionDiv");
const answerDiv = document.querySelector("#answerDiv");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const qNum = document.querySelector(".qNum");
const markBtn = document.querySelector(".mark");
const markedList = document.querySelector(".marked-list");
const submitAnswer = document.querySelector(".submit");
const timerDisplay = document.querySelector("#timer");
const progressBar = document.querySelector("#progressBar");

let currentQuestionIndex = 0;
const totalTime = 600;
let remainingTime = totalTime;

function displayQuestion(questionIndex) {
  qNum.innerHTML = `Question ${currentQuestionIndex + 1}`;
  const question = questions[questionIndex];
  questionDiv.textContent = question.title;
  answerDiv.innerHTML = "";
  question.answers.forEach((el, i) => {
    const answerWrapper = document.createElement("div");
    answerWrapper.classList.add("answer-card");

    const answerInput = document.createElement("input");
    answerInput.type = "radio";
    answerInput.name = "answers";
    answerInput.id = `answer${i}`;
    answerInput.value = el.body;

    const answerLabel = document.createElement("label");
    answerLabel.textContent = el.body;

    answerWrapper.appendChild(answerInput);
    answerWrapper.appendChild(answerLabel);
    answerDiv.appendChild(answerWrapper);

    answerWrapper.addEventListener("click", () => {
      document.querySelectorAll(".answer-card").forEach((card) => {
        card.classList.remove("selected");
      });
      answerWrapper.classList.add("selected");
      answerInput.checked = true;
      saveAnswer();
      toggleSubmitButton();
    });

    if (userAnswers[questionIndex] === el.body) {
      answerInput.checked = true;
      answerWrapper.classList.add("selected");
    }
  });

  updatePagination();
  toggleSubmitButton();
}

function updatePagination() {
  prevBtn.classList.toggle("disabled", currentQuestionIndex === 0);
  nextBtn.classList.toggle(
    "disabled",
    currentQuestionIndex === questions.length - 1
  );
}

function toggleSubmitButton() {
  if (Object.keys(userAnswers).length === questions.length) {
    submitAnswer.style.display = "block";
  } else {
    submitAnswer.style.display = "none";
  }
}

function updateTimer() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerDisplay.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  const progress = (remainingTime / totalTime) * 100;
  progressBar.style.width = `${progress}%`;
  progressBar.setAttribute("aria-valuenow", progress);

  if (remainingTime > 0) {
    remainingTime--;
  } else {
    clearInterval(timerInterval);
    location.replace("timeOutPage.html");
  }
}

const timerInterval = setInterval(updateTimer, 1000);

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    saveAnswer();
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    saveAnswer();
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  }
});

displayQuestion(currentQuestionIndex);

let markListArr = [];
markBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const questionNumber = currentQuestionIndex;
  const questionText = `Question ${questionNumber + 1}`;

  if (!markListArr.includes(questionText)) {
    markListArr.push(questionText);

    const markListItem = document.createElement("div");
    markListItem.classList.add("d-flex", "align-items-center", "mb-2");

    const markQuestionButton = document.createElement("button");
    markQuestionButton.classList.add(
      "btn",
      "btn-success",
      "flex-grow-1",
      "markL"
    );
    markQuestionButton.textContent = questionText;
    markQuestionButton.addEventListener("click", () => {
      currentQuestionIndex = questionNumber;
      displayQuestion(questionNumber);
    });

    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "ms-2", "btn");
    removeButton.innerHTML = "🗑";
    removeButton.addEventListener("click", () => {
      markedList.removeChild(markListItem);

      markListArr = markListArr.filter((item) => item !== questionText);
    });

    markListItem.appendChild(markQuestionButton);
    markListItem.appendChild(removeButton);

    markedList.appendChild(markListItem);
  }
});

submitAnswer.addEventListener("click", function (e) {
  e.preventDefault();
  saveAnswer();
  displayResults();

  const userAnswerStr = JSON.stringify(userAnswers);
  localStorage.setItem("userAnswer", userAnswerStr);
  location.replace("result.html");
});

//when i click next or prev btn the answes stays at it's place
function saveAnswer() {
  const selectedAnswer = document.querySelector(
    "input[name='answers']:checked"
  );
  if (selectedAnswer) {
    userAnswers[currentQuestionIndex] = selectedAnswer.value;
  }
}

function displayResults() {
  clearInterval(timerInterval);
  let score = 0;
  questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    if (userAnswer === question.correctAnswer) {
      score++;
    }
  });

  localStorage.setItem("score", score);
}

submitAnswer.style.display = "none";

document.getElementById("form").addEventListener("change", () => {
  saveAnswer();
  toggleSubmitButton();
});
