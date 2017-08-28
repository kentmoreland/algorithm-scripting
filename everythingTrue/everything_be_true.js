class ModifedCollection extends Array {
  constructor(list) {
    super();
    this.collection = list;
  }
  everyItemHasValueAtKey(currentKey) {
    const itemHasValueAtKey = item => item[currentKey];
    return this.collection.every(itemHasValueAtKey);
  }
}


function truthCheck(collection, pre) {
  const currentCollection = new ModifedCollection(collection);
  return currentCollection.everyItemHasValueAtKey(pre);
}

module.exports = truthCheck;
