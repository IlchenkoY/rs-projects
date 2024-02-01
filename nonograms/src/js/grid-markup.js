import calculateHints from "./calculateHints";

export default function generateGrid(imageMatrix, identifier) {
  const { rowHints, colHints } = calculateHints(imageMatrix);
  const gridContainer = document.querySelector(".container");
  gridContainer.innerHTML = "";

  const rows = imageMatrix.map((row, index) => {
    const cellsMarkup = row
      .map((value) => {
        return `<div class="cell-pict" style="background-color: ${
          identifier === "give-up" ? (value === 0 ? "white" : "#333") : "white"
        }"></div>`;
      })
      .join("");
    const hintsMarkup = rowHints[index]
      .map((hint) => `<div class="cell">${hint}</div>`)
      .join("");

    return identifier === "template"
      ? `<div class="row">${cellsMarkup}</div>`
      : `<div class="row">
          <div class="row-hints">${hintsMarkup}</div>
          <div class="row-pict">${cellsMarkup}</div>
        </div>`;
  });

  const colHintsMarkup = colHints.map((colHint) => {
    const hintsMarkup = colHint
      .map((hint) => `<div class="cell">${hint}</div>`)
      .join("");
    return `<div class="col">${hintsMarkup}</div>`;
  });

  const gridMarkup = rows.join("");

  gridContainer.innerHTML =
    identifier === "template"
      ? `${gridMarkup}`
      : `<div class="col-hints">${colHintsMarkup.join(
          ""
        )}</div><div>${gridMarkup}</div>`;
}
