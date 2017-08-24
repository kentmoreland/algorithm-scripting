
const buildContainerArray = (container, listItem) => {
  const currentItemIsAnArray = () => Array.isArray(listItem);
  const combineContainerAndCurrentArray = () => container.concat(listItem);
  const addCurrentValueToContainerArray = () => {
    container.push(listItem);
    return container;
  };

  if (currentItemIsAnArray()) {
    return combineContainerAndCurrentArray();
  }
  return addCurrentValueToContainerArray();
};

function flattenOneLevel(array) {
  return array.reduce(buildContainerArray, []);
}

function arrayContainsAnArray(array) {
  let index = 0;
  const indexIsValid = () => array[index];
  const valueAtIndexIsArray = () => Array.isArray(array[index]);
  const incrementIndex = () => { index += 1; };
  const trueIndexIsValid = () => true;
  const falseIndexIsInvalid = () => false;

  while (indexIsValid()) {
    if (valueAtIndexIsArray()) {
      return trueIndexIsValid();
    }
    incrementIndex();
  }
  return falseIndexIsInvalid();
}

function steamrollArray(arr) {
  let flattenedArray = flattenOneLevel(arr);
  while (arrayContainsAnArray(flattenedArray)) {
    flattenedArray = flattenOneLevel(flattenedArray);
  }
  return flattenedArray;
}

module.exports = steamrollArray;

