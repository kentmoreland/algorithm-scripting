function getArgumentsArray(fnArguments) {
  return Array.from(fnArguments);
}

function addArrayToContainer(array, container) {
  return container.concat(array);
}

function combineNonDuplicateNumbers(returnArray, number, index, array) {
  let newArray = array.slice(0, index);
  newArray.doesNotContain(number) ? returnArray.unshift(number) : newArray;
  return returnArray;
}

Array.prototype.doesNotContain = function(number) {
  return this.indexOf(number) < 0;
};

Array.prototype.removeDuplicates = function removeDuplicates() {
  return this.reduceRight(combineNonDuplicateNumbers, []);
};

Array.prototype.combineArrays = function combineArrays() {
  return this.reduceRight(addArrayToContainer, []);
};

function uniteUnique(arr) {
  arr = getArgumentsArray(arguments)
    .combineArrays()
    .removeDuplicates();
  return arr;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

module.exports = uniteUnique;