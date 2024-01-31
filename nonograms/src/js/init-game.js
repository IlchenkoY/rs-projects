import generateGrid from "./generate-grid";

document.addEventListener("DOMContentLoaded", initGame(15));

function initGame(num) {
  generateGrid(num);
}
