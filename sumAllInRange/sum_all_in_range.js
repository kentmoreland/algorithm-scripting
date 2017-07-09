//create a variable sum
//add the two numbers in the array
//find the highest number
  //store it in a variable
//find the lowest number
  //store it in a variable
//create a variable called current
  //initiate to the highest number
//while the value of current is greater than or equal to the lowest number
  //subtract 1 and add the result to the sum
  //decrement current by 2
//when the value of current is equal to or less than the lowest number
  //return the sum

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
