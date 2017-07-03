
function lengthIsGreater(string, number) {
  return string.length > number;
}

function prepString(string, number) {
  return string.slice(0, number);
}

function createNewString(string, number) {
  var newString;
  number > 3 ? newString = prepString(string, number - 3) : newString = prepString(string, number);
  return newString += "...";
}

function truncateString(str, num) {
  var lengthIsGood = lengthIsGreater(str, num);
  return lengthIsGood ? createNewString(str, num) : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)