const collection = require('./collection');

const helpers = (() => {
  function propIsTracks(prop) {
    return prop === 'tracks';
  }

  function valueIsEmpty(value) {
    return value === '';
  }

  function tracksIsEmpty(recordNumber) {
    return !collection[recordNumber].tracks;
  }

  function updateTrack(id, prop, value) {
    if (tracksIsEmpty(id)) {
      collection[id][prop] = [];
      collection[id][prop].push(value);
    } else {
      collection[id][prop].push(value);
    }
  }

  function updateProperty(currentStringId, currentProp, currentValue) {
    collection[currentStringId][currentProp] = currentValue;
  }

  function deleteProperty(id, prop) {
    delete collection[id][prop];
  }

  return { propIsTracks, valueIsEmpty, updateTrack, updateProperty, deleteProperty };
})();

module.exports = helpers;
