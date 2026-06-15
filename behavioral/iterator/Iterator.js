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

    hasPrevious() {
        return this.index > 0;
    }

    previous() {
        this.index--;
        return this.collection[this.index]; 
    }
}

module.exports = Iterator;