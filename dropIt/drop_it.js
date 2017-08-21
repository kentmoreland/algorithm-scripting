function itemPassesTest(item, testFunction) {
  return testFunction(item);
}

function putItemBackInArray(item, currentArray) {
  return currentArray.unshift(item);
}

function getNextElementFromArray(currentArray) {
  return currentArray.shift();
}

function arrayHasElements(currentArray) {
  return currentArray.length;
}

function dropElements(arr, func) {
  let itemToTest;
  while (arrayHasElements(arr)) {
    itemToTest = getNextElementFromArray(arr);
    if (itemPassesTest(itemToTest, func)) {
      putItemBackInArray(itemToTest, arr);
      return arr;
    }
  }
  return arr;
}

module.exports = dropElements;
