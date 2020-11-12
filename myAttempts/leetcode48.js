const rotate = function (matrix) {
  // determine matrix dimensions
  const matrixLength = matrix[0].length;
  // the array to manipulate
  const matrixAnswer = matrix;

  let countTop = 0;
  let countBottom = matrix.length;

  console.log(`hello${matrixAnswer}`);

  while (countTop != matrix.length / 2) {
    matrixAnswer[countTop] = matrix[countBottom];

    countTop++;
    countBottom--;
  }

  console.log(`hello${matrixAnswer}`);
};

matrix = [
  [21, 22, 23, 24, 25],
  [20, 7, 8, 9, 10],
  [19, 6, 1, 2, 11],
  [18, 5, 4, 3, 12],
  [17, 16, 15, 14, 13],
];

console.log('hello');

// rotate(matrix);
