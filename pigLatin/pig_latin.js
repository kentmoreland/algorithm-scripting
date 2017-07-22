var vowels = {a: "a", e: "e", i: "i", o: "o", u: "u"};

String.prototype.arrayed = function arrayed() {
  return this.split('');
};

Array.prototype.convertToString = function convertToString() {
  return this.join('');
};

function firstItemIsConsonant(collection) {
  return vowels[collection[0]] ? false : true;
};

function firstItemIsVowel(collection) {
  return vowels[collection[0]] ? true: false;
};

function removeFirstAndAddToEnd(string) {
  stringArrayed = string.arrayed();
  stringArrayed.push(stringArrayed.shift());
  return stringArrayed.convertToString();
};

function addPigLatinEnding(string) {
  return string + 'ay';
};

function addPigLatinEndingWithW(string) {
  return string + 'way';
};

function translateWordWithConsonantBeginning(string) {
   while(firstItemIsConsonant(string)) {
      string = removeFirstAndAddToEnd(string);
    }
    return addPigLatinEnding(string);
};

function translateWordWithVowelBeginning(string){
    return addPigLatinEndingWithW(string);
};


function translatePigLatin(str) {
  if(firstItemIsVowel(str)) {
    return translateWordWithVowelBeginning(str)
  }else {
   return translateWordWithConsonantBeginning(str);
  }
};


translatePigLatin("consonant");
translatePigLatin("algorithm");