var numerals = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M', 2000: 'MM', 3000: 'MMM', 4000: 'MMMM'};


function convertNumberToString(number) {
  return number.toString();
}

function convertStringNumberToArray(stringNumber) {
  return stringNumber.split('');
}

function getPlaceValue(num, index) {
  return Math.pow(10, index) * num;
}

function getReverseIndex(index, length) {
  return Math.abs(index - length);
}

function getPlaceValues(result, item, index, array) {
  var it = getReverseIndex(index, array.length - 1);
  result.unshift(getPlaceValue(item, it));
  return result;
}

function calculatePlaceValues(array) {
  return array.reduceRight(getPlaceValues, []);
}

function getRomanNumeral(number) {
  return numerals[number];
}

function convertPlaceValuesToRomanNumerals(array) {
  return array.map(getRomanNumeral).join('');
}

function convertToRoman(num) {
   var stringedNumber = convertNumberToString(num);
   var arrayedNumber = convertStringNumberToArray(stringedNumber);
   var placeValuedNumbers =  calculatePlaceValues(arrayedNumber);
   var rn = convertPlaceValuesToRomanNumerals(placeValuedNumbers);
   return rn;
}



convertToRoman(36);
getPlaceValue(2, 4);
convertToRoman(97);
convertToRoman(891);
convertToRoman(2014);