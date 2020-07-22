const solution = (fib1, fib2, upperlimit) => {
  let fib3 = 0;
  let answer = 0;

  console.log(`${upperlimit} ${fib1} ${fib2}`);

  while (fib3 < upperlimit) {
    // generate fibonacci numbers
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
    console.log(`fib3: ${fib3}`);

    if (isEven(fib3) === true) {
      console.log(`even: ${fib3}`);
      answer += fib3;
    }
  }

  return answer;
};

const isEven = number => {
  if (number % 2 === 0) {
    return true;
  }
};

const fib1 = 1;
const fib2 = 2;
const upperlimit = 4000000;
console.log(solution(fib1, fib2, upperlimit) + 2);
