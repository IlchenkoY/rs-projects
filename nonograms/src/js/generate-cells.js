export default function generateCells(num = "", size, mod = "") {
  let cells = "";
  for (let i = 0; i < size; i += 1) {
    cells += `<div class="${mod}cell">${num}</div>`;
  }
  return cells;
}
