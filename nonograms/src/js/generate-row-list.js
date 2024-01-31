export default function generateRowsList(size, generateCells, generateRow) {
  let row = "";
  for (let i = 0; i < size; i += 1) {
    let rows = generateCells("", size);
    row += generateRow(rows);
  }
  return row;
}
