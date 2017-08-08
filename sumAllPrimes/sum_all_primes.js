function numberIsDivisibleAndNotEqual(number, checker) {
  return number !== checker && checker % number === 0;
}

function numberIsGreaterThan1(number) {
  return number > 1;
}

function addToPrimesArray(primesArray, number) {
  primesArray.push(number);
}

function decrementNumber(number) {
  return number - 1;
}

function numberIsPrime(num) {
  let checker = num;
  while (numberIsGreaterThan1(checker)) {
    if (numberIsDivisibleAndNotEqual(checker, num)) {
      return false;
    }
    checker = decrementNumber(checker);
  }
  return true;
}

function sumOfLesserPrimes(num) {
  let currentNum = num;
  const primes = [];
  while (numberIsGreaterThan1(currentNum)) {
    if (numberIsPrime(currentNum)) {
      addToPrimesArray(primes, currentNum);
    }
    currentNum = decrementNumber(currentNum);
  }
  return primes;
}

function tally(sum, num) {
  return sum + num;
}


function sumPrimes(num) {
  return sumOfLesserPrimes(num).reduce(tally);
}


module.exports = sumPrimes;
