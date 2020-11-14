/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
const rotate = function (matrix) {
  // the array to manipulate
  const matrixAnswer = matrix;

  // boundaries
  let countTop = 0;
  let countBottom = matrix.length - 1;
  const matrixLength = Math.round(matrix.length / 2);

  while (countTop !== matrixLength) {
    // flip the matrix
    const tempArray = matrixAnswer[countTop];
    matrixAnswer[countTop] = matrix[countBottom];
    matrixAnswer[countBottom] = tempArray;

    countTop++;
    countBottom--;
  }

  let diagonal_Counter = 1;

  for (let x = 1; x <= matrixAnswer.length - 1; x++) {
    diagonal_Counter++;
    for (let y = 0; y < diagonal_Counter - 1; y++) {
      const temp = matrixAnswer[y][x];
      matrixAnswer[y][x] = matrixAnswer[x][y];
      matrixAnswer[x][y] = temp;
    }
  }

  return matrixAnswer;
};
