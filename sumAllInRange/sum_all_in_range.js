function addNumbersFromArray(arr) {
  return arr[0] + arr[1];
}

function getHighestNumber(number1, number2) {
  return Math.max(number1, number2);
}

function getLowestNumber(number1, number2) {
  return Math.min(number1, number2);
}

function numberPlusNumberMinus1(currentNumber){
  return currentNumber + (currentNumber - 1);
}

function reduceCurrentNumberBy2(currentNumber) {
  return currentNumber -= 2;
}


function sumAll(arr) {
  var sum = 0;
  var high = getHighestNumber(arr[0], arr[1]);
  var low = getLowestNumber(arr[0], arr[1]);
  var current = high;
  while(current >= low){
    sum += numberPlusNumberMinus1(current)
    current = reduceCurrentNumberBy2(current)
  }
  return sum;
}

sumAll([5, 10]);
