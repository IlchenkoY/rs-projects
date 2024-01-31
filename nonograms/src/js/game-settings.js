import imageMatrices from "../../data/image-matrices";
import gameSettingsMarkup from "./game-settings-markup";
import picturesGridMarkup from "./pictures-grid";
import generateGrid from "./generate-grid";

const gameForm = document.querySelector(".game-settings");
let size = "5";

gameForm.addEventListener("change", settingsChangeHandler);
gameForm.addEventListener("submit", settingsHandler);

function settingsChangeHandler(e) {
  if (e.target.nodeName !== "INPUT") {
    return;
  }
  size = e.target.value;
  if (e.target.nodeName === "INPUT") {
    gameSettingsMarkup(size);
  }
}

function settingsHandler(e) {
  e.preventDefault();
  const form = e.target;
  const selectedPicture = form.elements.picture.value;
  const selectedPictureMatrix = imageMatrices[size][selectedPicture];
  // generateGrid(size);
  picturesGridMarkup(selectedPictureMatrix);
}
