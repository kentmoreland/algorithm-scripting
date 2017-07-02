function titleWord(word) {
  var array = word.split('');
  return array.map(function(letter, index){
    if(index === 0){
      letter = letter.toUpperCase();
    } else {
      letter = letter.toLowerCase();
    }
    return letter;
  }).join('');
}

function titleCase(str) {
  var array = str.split(' ');
  return array.map(titleWord).join(' ');
}



titleCase("I'm a litTle tea pot")