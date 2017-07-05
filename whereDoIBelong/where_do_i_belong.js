var newArray;


function sortArray(array) {
  return array.sort(function(a, b){
    return a - b;
  })
}

function findLargerIndex(number) {
  for(var i = 0; i < newArray.length; i++) {
    if(number <= newArray[i]) {
      return i;
    }
  }
  return newArray.length;
}

function getIndexToIns(arr, num) {
  newArray = sortArray(arr);
  return findLargerIndex(num);
}

getIndexToIns([40, 50], 60)
getIndexToIns([10, 20, 30, 40, 50], 30);