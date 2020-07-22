const addMultiples = (answer, multiple, upperlimit) => {
  for (let i = 0; i < upperlimit; i += multiple) {
    answer += i;

    console.log(`${i}    ${answer}`);
  }

  return answer;
};

const upperlimit = 1000;

let answer = addMultiples(0, 3, upperlimit);

answer += addMultiples(0, 5, upperlimit);

console.log(answer);
