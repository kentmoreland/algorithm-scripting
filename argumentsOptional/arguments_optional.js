const helpers = require('./arguments_optional_helpers');

const argumentListhasTwoNumbers = helpers.argumentListhasTwoNumbers;
const getSumOfTheArguments = helpers.getSumOfTheArguments;
const argumentListHasOneNumber = helpers.argumentListHasOneNumber;
const addTheNumberToCurrentArgument = helpers.addTheNumberToCurrentArgument;

function addTogether(...args) {
  const firstArg = args[0];

  if (argumentListhasTwoNumbers(args)) {
    return getSumOfTheArguments(args);
  }

  if (argumentListHasOneNumber(args)) {
    return addTheNumberToCurrentArgument.bind(this, firstArg);
  }
  return undefined;
}


module.exports = addTogether;
