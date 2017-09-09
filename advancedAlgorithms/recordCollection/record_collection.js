const collection = require('./collection');
const propIsTracks = require('./helpers').propIsTracks;
const valueIsEmpty = require('./helpers').valueIsEmpty;
const updateTrack = require('./helpers').updateTrack;
const updateProperty = require('./helpers').updateProperty;
const deleteProperty = require('./helpers').deleteProperty;


function updateRecords(id, prop, value) {
  const stringId = id.toString();
  if (valueIsEmpty(value)) {
    deleteProperty(stringId, prop);
  } else if (propIsTracks(prop)) {
    updateTrack(stringId, prop, value);
  } else {
    updateProperty(stringId, prop, value);
  }
  return collection;
}


module.exports = { updateRecords, collection };
