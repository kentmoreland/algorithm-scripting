
function ascending(a, b) {
  return a - b;
}

function currentIsLessThanTarget(currentValue, targetValue) {
  return currentValue <= targetValue;
}

function addCurrentToTheArray(currentValue, collectionArray) {
  collectionArray.push(currentValue);
}

function incrementCurrentValue(currentValue) {
  const currentValueIncremented = currentValue + 1;
  return currentValueIncremented;
}

function getNumberRange(array) {
  array.sort(ascending);
  const range = [];
  let current = array[0];
  const target = array[1];

  while (currentIsLessThanTarget(current, target)) {
    addCurrentToTheArray(current, range);
    current = incrementCurrentValue(current);
  }
  return range;
}

function allNumbersAreDivisibile(collectionArray, targetNumber) {
  return collectionArray.every(number => targetNumber % number === 0);
}

function allNumbersAreNotDivisible(collectionArray, targetNumber) {
  return !(allNumbersAreDivisibile(collectionArray, targetNumber));
}

function getNextMultiple(currentMultiple) {
  const newMultiple = currentMultiple + 1;
  return newMultiple;
}

function getNewTarget(multiple, base) {
  const newTarget = multiple * base;
  return newTarget;
}

function findMultiple(collectionArray, targetNumber) {
  let currentMultiple = 1;
  const base = targetNumber;
  while (allNumbersAreNotDivisible(collectionArray, targetNumber)) {
    currentMultiple = getNextMultiple(currentMultiple);
    targetNumber = getNewTarget(currentMultiple, base);
  }
  return targetNumber;
}

function smallestCommons(arr) {
  const numberRange = getNumberRange(arr);
  const target = arr[1];
  return findMultiple(numberRange, target);
}

module.exports = smallestCommons;
