import resetGameHandler from "./modal/reset-game";
import createCountdownTimer from "./timer";
import generateGrid from "./grid-markup";

let currentArr;
let firstClick;
let timerId;
let timer;
let matrix;
const giveUpBtn = document.querySelector(".give-up");
const playBtn = document.querySelector(".play");
const resetBtn = document.querySelector(".reset");
const radioBtnList = document.querySelectorAll(".game-settings-radio");
const timerEl = document.querySelectorAll(".value");
giveUpBtn.addEventListener("click", giveUpHandler);
resetBtn.addEventListener("click", () => reset("reset"));

function gameStatus(container, currentMatrix, size, clickStatus) {
  firstClick = clickStatus;
  const modalBackdrop = document.querySelector(".modal-backdrop");
  matrix = currentMatrix;
  const flatMatrix = currentMatrix.flatMap((el) => el);
  currentArr = currentMatrix.flatMap((el) =>
    el.map((el) => (el === 1 ? (el = 0) : el))
  );
  container.addEventListener("click", gameStatusHandler);
  container.addEventListener("contextmenu", crossHandler);
  function crossHandler(e) {
    e.preventDefault();
    e.target.addEventListener("contextmenu", crossToggle);
    function crossToggle(e) {
      if (e.button === 2) {
        if (e.currentTarget.childNodes.length === 1) {
          e.currentTarget.innerHTML = "";
        }
        return;
      }
    }
    if (e.button === 2) {
      e.target.insertAdjacentHTML(
        "beforeend",
        `<img class="cross" src="/images/cross.png"/>`
      );
    }
  }

  function gameStatusHandler(e) {
    if (firstClick) {
      timer = new createCountdownTimer(Date.now());
      timerId = timer.start();
    }
    if (e.target.className !== "cell-pict") {
      return;
    }

    const currentCell = e.target;
    repaintCell(currentCell);
    checkStatus(currentCell, flatMatrix, modalBackdrop, size);
    firstClick = false;
  }
}

function repaintCell(cellStyle) {
  cellStyle.style.backgroundColor === "white"
    ? (cellStyle.style.backgroundColor = "#333")
    : (cellStyle.style.backgroundColor = "white");
}

function checkStatus(currentCell, flatMatrix, modalBackdrop, size) {
  const currentCellId = Number(currentCell.dataset.id);
  currentArr = currentArr.map((el, i) => {
    if (i === currentCellId) {
      return el === 0 ? (el = 1) : (el = 0);
    }
    return el;
  });
  if (JSON.stringify(currentArr) === JSON.stringify(flatMatrix)) {
    const modalTitle = document.querySelector(".modal__title");
    modalBackdrop.style.display = "block";
    modalTitle.textContent = `Great! You have solved the nonogram in ${timer.getTime()} seconds!`;
    timer.stop(timerId);
    const modalBtn = document.querySelector(".modal-btn");
    modalBtn.addEventListener("click", () => resetGameHandler(size, timer));
    firstClick = true;
  }
}

function giveUpHandler() {
  reset("give-up");
}

function reset(identifier) {
  generateGrid(matrix, identifier);
  giveUpBtn.disabled = true;
  radioBtnList.forEach((el) => (el.disabled = false));
  playBtn.disabled = false;
  if (timer) {
    timer.stop(timerId);
  }
  timerEl.forEach((el) => (el.textContent = "00"));
  firstClick = true;
}

export { giveUpHandler, gameStatus };
