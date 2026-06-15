const Iterator = require("./Iterator");

class ProductsCollection {
    constructor() {
        this.products = [];
    }

    addProduct(products) {
        this.products.push(products);
    }

    createIterator() {
        return new Iterator(this.products);
    }
}

module.exports = ProductsCollection;