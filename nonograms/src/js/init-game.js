import generateGrid from "./grid-markup";
import gameSettingsMarkup from "./settings-markup";
import { templates } from "../../data/image-matrices";
import modal from "./modal/modal-markup";
import timerMarkup from "./timer-markup";

document.addEventListener("DOMContentLoaded", initGame(5));

export default function initGame(num) {
  const { body } = document;
  body.innerHTML = "";
  const container = `<div class="wrapper">
                      ${timerMarkup}
                      <div class="container"></div>
                    </div>${modal}`;
  body.insertAdjacentHTML("beforeend", container);
  generateGrid(templates[num], "template");
  gameSettingsMarkup(num);
}
