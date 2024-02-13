import calculateHints from "./calculateHints";

export default function generateGrid(imageMatrix, identifier) {
  const { rowHints, colHints } = calculateHints(imageMatrix);
  const gridContainer = document.querySelector(".container");
  gridContainer.innerHTML = "";
  let id = 0;

  const rows = imageMatrix.map((row, index) => {
    const cellsMarkup = row
      .map((value) => {
        const markup = `<div class="cell-pict" style="background-color: ${
          identifier === "give-up" ? (value === 0 ? "white" : "#333") : "white"
        }" data-id="${id}"></div>`;
        id += 1;
        return markup;
      })
      .join("");
    const hintsMarkup = rowHints[index]
      .map((hint) => `<div class="cell">${hint}</div>`)
      .join("");

    if (identifier === "template") {
      return `<div class="row">${cellsMarkup}</div>`;
    }
    if (identifier === "reset") {
      return `<div class="row">
                <div class="row-hints">${hintsMarkup}</div>
                <div class="row-pict">${cellsMarkup}</div>
              </div>`;
    }
    return `<div class="row">
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
        )}</div><div class="main">${gridMarkup}</div>`;
}
