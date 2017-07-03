function isPositive(num) {
  return num >= 0;
}

function addString(string) {
  var newString = '';
  return newString += string;
}

function loop(num, callback, arg) {
  var resultString = ''
  for (var i = 0; i < num; i++) {
     resultString += callback(arg);
  }
  return resultString;
}

function repeatStringNumTimes(str, num) {
  return isPositive(num) ? loop(num, addString, str) : '';
}

repeatStringNumTimes("abc", 3)

