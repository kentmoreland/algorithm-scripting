
function diffArray(arr1, arr2) {
  var combinedArray = combineArrays(arr1, arr2);

  function combineArrays(array1, array2) {
    return array1.concat(array2);
  }

  function itemIsNotInBothArrays(item, array1, array2) {
    return array1.indexOf(item) < 0 || array2.indexOf(item) < 0;
  }

  function addItemToExclusiveArray(result, item) {
     itemIsNotInBothArrays(item, arr1, arr2) ? result.push(item) : item;
     return result;
  }

  function createArrayFromExclusiveValues(combinedArray, arr1, arr2) {
    return combinedArray.reduce(addItemToExclusiveArray, []);
  }

  return createArrayFromExclusiveValues(combinedArray, arr1, arr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])