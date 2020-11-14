/* eslint-disable no-plusplus */
/* eslint-disable camelcase */

/*
input:
[
[1,2,3],
[4,5,6],
[7,8,9]
]

flip the rows -> row 0 becomes row nth (and vice verse)
so on and so on
[
[7,8,9],
[4,5,6],
[1,2,3]
]

swap numbers along the diagonal
- switch 4 with 8, 1 with 9...
*/

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
    /* flip the numbers along the diagonal */
    diagonal_Counter++;
    for (let y = 0; y < diagonal_Counter - 1; y++) {
      const temp = matrixAnswer[y][x];
      matrixAnswer[y][x] = matrixAnswer[x][y];
      matrixAnswer[x][y] = temp;
    }
  }

  return matrixAnswer;
};
