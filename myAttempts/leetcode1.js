const twoSum = function (numbers, target) {
  const hashtable = {};

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const desired = target - number;

    if (desired in hashtable) {
      const leftIndex = hashtable[desired];
      return [leftIndex, i];
    }
    hashtable[number] = i;
  }
};

const numbers = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(numbers, target));
