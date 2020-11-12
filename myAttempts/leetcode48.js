/* eslint-disable no-plusplus */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix1 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

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

  for (let x = 0; x < matrixLength; x++) {
    for (let y = 1; y < matrixLength; y++) {
      const temp = matrixAnswer[x + 1][y - 1];
      matrixAnswer[x + 1][y - 1] = matrixAnswer[y][x];
      matrixAnswer[y][x] = temp;
    }
  }

  console.log(matrixAnswer);
};

rotate(matrix);
console.log('Hello');
rotate(matrix1);
