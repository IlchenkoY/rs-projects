import { imageMatrices, templates } from "../../data/image-matrices";
import gameSettingsMarkup from "./settings-markup";
import generateGrid from "./grid-markup";
import { gameStatus } from "./game-status";

const gameForm = document.querySelector(".game-settings");
const giveUpBtn = document.querySelector(".give-up");
const resetBtn = document.querySelector(".reset");
const playBtn = document.querySelector(".play");
const radioBtnList = document.querySelectorAll(".game-settings-radio");
let selectedPictureMatrix;
let size = "5";

gameForm.addEventListener("change", settingsChangeHandler);
gameForm.addEventListener("submit", startGameHandler);

function settingsChangeHandler(e) {
  if (e.target.nodeName !== "INPUT") {
    return;
  }
  size = e.target.value;
  generateGrid(templates[size], "template");
  gameSettingsMarkup(size);
}

function startGameHandler(e) {
  e.preventDefault();

  const firstClick = true;
  const form = e.target;
  const selectedPicture = form.elements.picture.value;
  selectedPictureMatrix = imageMatrices[size][selectedPicture];
  giveUpBtn.disabled = false;
  resetBtn.disabled = false;
  generateGrid(selectedPictureMatrix);
  const gameContainer = document.querySelector(".main");
  gameStatus(gameContainer, selectedPictureMatrix, size, firstClick);
  radioBtnList.forEach((el) => (el.disabled = true));
  playBtn.disabled = true;
}
