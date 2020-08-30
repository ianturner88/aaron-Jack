const searchInsert = require('./leetcode35.js');

test('Input: [1,3,5,6], 5 => Output: 2', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test('Input: [1,3,5,6], 2 => Output: 1', () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test('Input: [1,3,5,6], 7 => Output: 4', () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test('Input: [1,3,5,6], 0 => Output: 0', () => {
  expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
});

test('Input: [1], 0 => Output: 0', () => {
  expect(searchInsert([1], 0)).toBe(0);
});

test('Input: [1], 2 => Output: 1', () => {
  expect(searchInsert([1], 2)).toBe(1);
});
