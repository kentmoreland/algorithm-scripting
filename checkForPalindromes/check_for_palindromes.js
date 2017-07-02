function prepStringReverse(string) {
  return string.replace(/\W+|_/g, '')
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

}

function prepString(string) {
  return string.replace(/\W+|_/g, '')
    .toLowerCase();
}

function palindrome(str) {
  var newString = prepString(str);
  var reverseString = prepStringReverse(str);
  return newString === reverseString;

}


palindrome("race car")