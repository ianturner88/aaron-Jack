function sieveEratosthenes(upperlimit) {
  const primeArray = new Array(upperlimit);
  let multiple = 1;

  for (let i = 0; i < primeArray.length; i++) {
    while (multiple < upperlimit) {
      primeArray[multiple] = false;
      multiple *= i;
      console.log(multiple);
    }
  }

  return primeArray;
}
const upperlimit = 200000;
const primeArray = sieveEratosthenes(upperlimit);
const index = 10001;

// check
console.log(primeArray[2]);
console.log(primeArray[14]);
console.log(primeArray[9]);
console.log(primeArray[7]);

function prime10001(primeArray) {
  let counter = 0;

  for (let i = 0; i < index && counter < 10002; i++) {
    if (primeArray[i] === true) {
      counter++;
    }
  }

  return primeArray[counter];
}

console.log(prime10001(primeArray));
