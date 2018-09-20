class Sorter {

    constructor() {
        let array = [];
        let comparator = (a, b) => a - b;

        this.getArray = function() {
            return array;
        };

        this.setArray = function(arr) {
            array = arr;
        };

        this.getComparator = function() {
            return comparator;
        };

        this.setComparator = function(compareFunction) {
            comparator = compareFunction;
        };
    }

    add(element) {
        this.getArray().push(element);
    }

    at(index) {
        return this.getArray()[index];
    }

    get length() {
        return this.getArray().length;
    }

    toArray() {
        return this.getArray()
    }

    sort(indices) {
        let originalArray = this.getArray();
        let arrToSort = indices.map(i => originalArray[i]);
        let mapper = (value, i) => indices.includes(i) ? arrToSort.shift() : value;

        arrToSort.sort(this.getComparator());
        this.setArray(originalArray.map(mapper));
    }

    setComparator(compareFunction) {
        this.setComparator(compareFunction);
    }
}

module.exports = Sorter;