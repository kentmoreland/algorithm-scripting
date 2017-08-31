const formatTests = [/^[1]\s\d{3}\s\d{3}\s\d{4}$/, /^[1]\s\d{3}[-]\d{3}[-]\d{4}$/, /^[1]\s[(]\d{3}[)]\s\d{3}[-]\d{4}$/, /^[1][(]\d{3}[)]\d{3}[-]\d{4}$/, /^[(]\d{3}[)]\s\d{3}[-]\d{4}$/, /^[(]\d{3}[)]\d{3}[-]\d{4}$/, /^\d{10}$/, /^\d{3}[-]\d{3}[-]\d{4}$/];

function checkEachFormatTestForMatch(numberToMatch) {
  return formatTests.some(testFormat => testFormat.test(numberToMatch));
}

function isValidUsNumber(telephoneNumber) {
  return checkEachFormatTestForMatch(telephoneNumber);
}

module.exports = isValidUsNumber;
