class ChunkArray {
  constructor(size) {
    this.size = size;
    this.chunked = [];
    this.tempArray;
  }

  getChunk(array) {
    return array.slice(0, this.size);
  }

  getNewArray(array){
    return array.slice(this.size);
  }

  addChunk(array) {
    return this.chunked.push(this.getChunk(array))
  }

  chunkArrayInGroup(array) {
    this.addChunk(array)
    this.tempArray = this.getNewArray(array);
    return this.tempArray.length ? this.chunkArrayInGroup(this.tempArray) : this.chunked
  }
}

var chunksOf2 = new ChunkArray(2);

console.log(chunksOf2.chunkArrayInGroup(["a", "b", "c", "d"]));
