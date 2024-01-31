export default function generateRow(cells, directionMod = "row") {
  return `<div class="${directionMod}">${cells}</div>`;
}
