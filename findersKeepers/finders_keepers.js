
function currentItemPassesTest(currentItemValue, testFunction) {
  return testFunction(currentItemValue);
}

function arrayHasValueAtIndex(array, index) {
  return array[index];
}

function incrementIndex(index) {
  const nextIndex = index + 1;
  return nextIndex;
}

function findElement(arr, func) {
  const test = func;
  let index = 0;
  let currentItem;

  while (arrayHasValueAtIndex(arr, index)) {
    currentItem = arr[index];

    if (currentItemPassesTest(currentItem, test)) {
      return currentItem;
    }
    nextIndex = incrementIndex(index);
    index = nextIndex;
  }

  return undefined;
}


module.exports = findElement;
