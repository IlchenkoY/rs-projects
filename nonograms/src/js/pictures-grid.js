export default function picturesGridMarkup(imageMatrix) {
  const gridContainer = document.querySelector(".rows-list");
  console.log(imageMatrix);

  const picturesGridMarkup = imageMatrix
    .map((row) => {
      const cellsMarkup = row
        .map((value) => {
          return `<div class="cell" style="background-color: ${
            value === 0 ? "white" : "black"
          }"></div>`;
        })
        .join("");
      return `<div class="row">${cellsMarkup}</div>`;
    })
    .join("");

  gridContainer.innerHTML = picturesGridMarkup;
}
