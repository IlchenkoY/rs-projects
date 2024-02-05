import { templates } from "../../../data/image-matrices";
import generateGrid from "../grid-markup";

export default function resetGame(size, timer) {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const giveUpBtn = document.querySelector(".give-up");
  const playBtn = document.querySelector(".play");
  const radioBtnList = document.querySelectorAll(".game-settings-radio");
  const timerEl = document.querySelectorAll(".value");

  modalBackdrop.style.display = "none";
  generateGrid(templates[size], "template");
  giveUpBtn.disabled = true;
  radioBtnList.forEach((el) => (el.disabled = false));
  playBtn.disabled = false;
  timerEl.forEach((el) => (el.textContent = "00"));
}
