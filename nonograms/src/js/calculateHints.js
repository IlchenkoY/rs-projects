export default function calculateHints(imageMatrix) {
  const numCols = imageMatrix[0].length;

  const calculateHintFromValues = (values) => {
    return values
      .reduce(
        (hints, value) => {
          if (value === 1) {
            hints[hints.length - 1] += 1;
          } else if (hints[hints.length - 1] > 0) {
            hints.push(0);
          }
          return hints;
        },
        [0]
      )
      .filter((hint) => hint > 0);
  };

  const rowHints = imageMatrix.map((row) => calculateHintFromValues(row));

  const colHints = Array.from({ length: numCols }, (_, j) =>
    calculateHintFromValues(imageMatrix.map((row) => row[j]))
  );
  return { rowHints, colHints };
}
