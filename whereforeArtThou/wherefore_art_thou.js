function getPropertiesFromSource(source) {
  return Object.keys(source);
}

function objectHasProp(object, property) {
  return object.hasOwnProperty(property);
}

function objectHasValue(object, property, value) {
  return object[property] === value;
}

function objectHasMatchingKeyValuePairs(object, array, source) {
  var indicator;
  for(var i=0; i<array.length; i++) {
    var prop = array[i];
    var objVal = object[prop];
    var srcVal = source[prop];
    var ObjHasNoProp = !objectHasProp(object, prop);
     ObjHasNoProp || objVal != srcVal ? indicator = false : indicator = true;
  }
  return indicator;
}

function addObjectToArray(object, array) {
  return array.push(object);
}

function getValueFromProperty(source, property) {
  return source[property];
}

function whatIsInAName(collection, source) {
  function buildArrayOfMatches(arr, object){
    var sourceKeys = Object.keys(source);
    var keys = getPropertiesFromSource(source);

     if(objectHasMatchingKeyValuePairs(object, keys, source)){
       addObjectToArray(object, arr);
     }
    return arr;
  }

  return collection.reduce(buildArrayOfMatches, []);
}





whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

checkObjectForProperty({ first: "Romeo", last: "Montague" }, "first" );

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });