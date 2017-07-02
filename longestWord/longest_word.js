function findLongestWord(str) {
  var array = str.split(' ');
  return array.reduce(function(max, word) {
    return word.length > max ? max = word.length : max;
  }, 0);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));