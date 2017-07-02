function getLargestNumber(array) {
  return array.reduce(function(max, number){
    return number > max ? max = number : max;
  }, 0)
}

function largestOfFour(arr) {
  return arr.map(getLargestNumber);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);