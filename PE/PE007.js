function sieveEratosthenes(upperlimit) {
  const primeArray = new Array(upperlimit);
  const halfUpperlimit = upperlimit / 2;

  for (let i = 2; i < halfUpperlimit; i++) {
    let multiple = i;
    primeArray[multiple] = true;
    multiple += i;

    while (multiple < upperlimit) {
      multiple += i;
      primeArray[multiple] = false;
      console.log(`multple: ${multiple}  isPrime?: ${primeArray[multiple]}`);
    }
  }

  return primeArray;
}
const upperlimit = 15;
const primeArray = sieveEratosthenes(upperlimit);
const index = 6;

function prime10001(primeArray, index) {
  let counter = 0;

  for (let i = 0; i < index && counter < 10002; i++) {
    if (primeArray[i] === true) {
      counter++;
    }
  }

  return primeArray[counter];
}

console.log(prime10001(primeArray));
