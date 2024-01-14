import gallow from "./gallow/gallow-section-markup.js";
import quiz from "./quiz/quiz-markup.js";
import modal from "./modal/modal-markup.js";
import questions from "../data/quesions.js";

let currentLetterIndexes;
let secretWord;
let incorrectGuesses = 0;
let quizList;
let secretWordLength = 0;
let guessedLettersLength = 0;

function initGame() {
  const { body } = document;
  const container = `<div class="container">${gallow}${quiz}${modal}</div>`;
  body.innerHTML += container;

  handleHint();
  createQuizAnswer();
  handleGuesses();
  createVirtualKeyboard();
}

function createVirtualKeyboard() {
  const keybord = document.querySelector(".quiz__letter-list");
  keybord.addEventListener("click", handVirtualKeyboard);
}

function handVirtualKeyboard(e) {
  const letterGuess = e.target.textContent;
  const currentBtn = e.target;
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
  const randomQuestionId = Math.floor(Math.random() * 20) + 1;
  const randomQuestion = questions.filter(
    (el) => el.id === randomQuestionId
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
  const modalBackdrop = document.querySelector(".modal-backdrop");

  if (incorrectGuesses >= 6 || secretWordLength === guessedLettersLength) {
    modalBackdrop.style.display = "block";
  }

  // displayEndGameModal();
}

// function displayEndGameModal() {
// }

// function resetGame() {
// }

window.onload = initGame;
