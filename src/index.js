class Sorter {
  constructor() {
    this.array = [];
    this.comparator = (left, right) => left - right;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let arraySort = [];
    indices.sort();
    for (let i = 0; i < indices.length; i++ ) {
  		arraySort.push(this.array[indices[i]]);
	  }
	  arraySort.sort(this.comparator);
	  for (let i = 0; i < indices.length; i++ ) {
		  this.array[indices[i]] = arraySort[i];
	  }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;