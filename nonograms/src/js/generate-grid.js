import generateCells from "./generate-cells";
import generateRow from "./generate-row";
import generateRowsList from "./generate-row-list";

export default function generateGrid(size) {
  const { body } = document;
  const container = `<div class="container"></div>`;
  body.insertAdjacentHTML("beforeend", container);
  const gameContainer = document.querySelector(".container");

  const classMod = "clue-";
  const topRowMod = "top-clue-";
  const directionMod = "left-clues";

  const topClueRow = `<div class="row top-clues"><div class="top-left-cell"></div>${generateRow(
    generateCells(1, size, topRowMod)
  )}</div>`;

  const leftClueCell = `${generateRow(
    generateCells(1, size, classMod),
    directionMod
  )}`;

  gameContainer.insertAdjacentHTML("beforeend", topClueRow);
  console.log(generateRowsList(size, generateCells, generateRow));
  const rowsMarkup = `<div class="rows-list">${generateRowsList(
    size,
    generateCells,
    generateRow
  )}</div>`;
  const mainSection = `<div class="main-section">${leftClueCell}${rowsMarkup}</div>`;
  gameContainer.insertAdjacentHTML("beforeend", mainSection);
}
