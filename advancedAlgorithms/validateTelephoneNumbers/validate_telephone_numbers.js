const isValidUsNumber = require('./helpers');

function telephoneCheck(str) {
  return isValidUsNumber(str);
}

module.exports = telephoneCheck;
