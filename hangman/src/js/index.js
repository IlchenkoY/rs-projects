import gallow from "./gallow/gallow-section-markup.js";
import quiz from "./quiz/quiz-markup.js";
import modal from "./modal/modal-markup.js";
import questions from "../data/quesions.js";

let currentLetterIndexes;
let secretWord;
let incorrectGuesses = 0;
let quizList;
let keyList;
let secretWordLength = 0;
let guessedLettersLength = 0;
let selectedButtons = [];
let gallowImg;
let randomQuestionId;

function initGame() {
  const { body } = document;
  const container = `<div class="container">${gallow}${quiz}${modal}</div>`;
  body.innerHTML += container;
  document.addEventListener("keydown", handKeyboard);

  handleHint();
  createQuizAnswer();
  handleGuesses();
  createVirtualKeyboard();
}

function createVirtualKeyboard() {
  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode("A".charCodeAt(0) + index)
  );
  const newKeysLis = alphabet
    .map(
      (el) =>
        `<li class="quiz__letter-item"><button class="quiz__letter">${el}</button></li>`
    )
    .join("");
  const keybord = document.querySelector(".quiz__letter-list");
  keybord.innerHTML = newKeysLis;
  keyList = Array.from(keybord.children)
    .map(({ children }) => Array.from(children))
    .flatMap((el) => el);
  keybord.addEventListener("click", handVirtualKeyboard);
}

function handVirtualKeyboard(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const letterGuess = e.target.textContent;
  handleLetter(letterGuess);
}

function handKeyboard({ code }) {
  if (code.slice(0, 3) !== "Key") {
    return;
  }
  const letterGuess = code.slice(-1);
  handleLetter(letterGuess);
}

function handleLetter(letterGuess) {
  if (selectedButtons.includes(letterGuess)) {
    return;
  }
  selectedButtons.push(letterGuess);

  const currentBtn = Array.from(keyList).filter(
    (el) => el.textContent === letterGuess
  )[0];
  currentBtn.disabled = true;
  currentBtn.style.boxShadow = "none";
  currentBtn.style.cursor = "default";

  function findIndexes(arr, targetValue) {
    return arr.reduce((acc, currentValue, currentIndex) => {
      if (currentValue === targetValue) {
        acc.push(currentIndex);
      }
      return acc;
    }, []);
  }

  currentLetterIndexes = findIndexes(
    Array.from(secretWord),
    letterGuess.toLowerCase()
  );

  handleQuizAnswer(currentLetterIndexes, letterGuess);
  handleGuesses();
  checkGameStatus();
}

function handleQuizAnswer(indexesArr, letter) {
  gallowImg = document.querySelector(".gallow__img");
  const currentGuessedEl = Array.from(quizList.children).filter((el) =>
    indexesArr.includes(Number(el.dataset.index))
  );

  if (currentGuessedEl.length > 0) {
    guessedLettersLength += currentGuessedEl.length;
    currentGuessedEl.forEach((el) => {
      el.classList.add("quiz__word-item--quessed");
      el.textContent = letter;
    });

    return;
  }
  incorrectGuesses += 1;
  gallowImg.src = `src/assets/Component ${incorrectGuesses}.png`;
}

function createQuizAnswer() {
  quizList = document.querySelector(".quiz__word-list");
  const quizListMarkup = Array.from(secretWord)
    .map((_, i) => `<li class="quiz__word-item" data-index="${i}"></li>`)
    .join("");

  quizList.innerHTML = quizListMarkup;
}

function handleHint() {
  const question = document.querySelector(".quiz__question");
  function randomId() {
    return randomQuestionId === Math.floor(Math.random() * 20) + 1
      ? randomId()
      : Math.floor(Math.random() * 20) + 1;
  }
  randomQuestionId = randomId();

  const randomQuestion = questions.filter(
    ({ id }) => id === randomQuestionId
  )[0];
  question.textContent = randomQuestion.question;
  secretWord = randomQuestion.answer;
  secretWordLength = secretWord.length;
}

function handleGuesses() {
  const guessCount = document.querySelector(".quiz__incorrect-count--counter");
  guessCount.textContent = incorrectGuesses;
}

function checkGameStatus() {
  if (incorrectGuesses >= 6) {
    displayEndGameModal("lose");
    return;
  }
  if (secretWordLength === guessedLettersLength) {
    displayEndGameModal("win");
  }
}

function displayEndGameModal(userStatus) {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalTitle = document.querySelector(".modal__title");
  const modalWord = document.querySelector(".modal-word");

  if (userStatus === "win") {
    modalTitle.textContent = "Win!";
  }
  if (userStatus === "lose") {
    modalTitle.textContent = "Game Ower!";
  }
  modalWord.textContent = `${secretWord.toUpperCase()}`;
  modalBackdrop.style.display = "block";
  document.addEventListener("click", resetGame);
}

function resetGame({ target }) {
  const modalBtn = document.querySelector(".modal-btn");
  const modalBackdrop = document.querySelector(".modal-backdrop");
  if (target === modalBtn) {
    gallowImg.src = `src/assets/gallows.png`;
    handleHint();
    createQuizAnswer();
    incorrectGuesses = 0;
    guessedLettersLength = 0;
    handleGuesses();
    createVirtualKeyboard();
    selectedButtons = [];
    modalBackdrop.style.display = "none";
    document.removeEventListener("click", resetGame);
  }
}

window.onload = initGame;
