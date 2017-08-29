const argumentsOptionalHelpers = (() => {
  function itemIsNumber(item) {
    return typeof item === 'number';
  }

  function allItemsAreNumbers(array) {
    return array.every(itemIsNumber);
  }

  function argumentListHasOneNumber(array) {
    return array.every(itemIsNumber);
  }

  function thereAreTwoArguments(argumentList) {
    return argumentList.length === 2;
  }

  function getSumOfTheArguments(argumentList) {
    const getSum = (sum, currentArgument) => sum += currentArgument;
    return argumentList.reduce(getSum, 0);
  }

  function argumentListhasTwoNumbers(argumentList) {
    return allItemsAreNumbers(argumentList) &&
    thereAreTwoArguments(argumentList);
  }

  function addTwoArguments(number1, number2) {
    const result = number1 + number2;
    return result;
  }

  function addTheNumberToCurrentArgument(firstArg, ...nextArgs) {
    const secondArg = nextArgs[0];

    if (allItemsAreNumbers(nextArgs)) {
      return addTwoArguments(2, secondArg);
    }
    return undefined;
  }

  return {
    itemIsNumber,
    allItemsAreNumbers,
    argumentListHasOneNumber,
    thereAreTwoArguments,
    getSumOfTheArguments,
    argumentListhasTwoNumbers,
    addTwoArguments,
    addTheNumberToCurrentArgument,
  };
})();

module.exports = argumentsOptionalHelpers;
