class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.collection.length;
    }

    next() {
        const item = this.collection[this.index];
        this.index++;
        return item;
    }
}

module.exports = Iterator;