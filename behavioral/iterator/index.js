const UsersCollection = require('./UsersCollection')
const ProductsCollection = require('./ProductsCollection')

const users = new UsersCollection();
users.addUser({ name: "Jon", age: 17 })
users.addUser({ name: "Sandor", age: 27 })

const userIterator = users.createIterator(this.users);

/*console.log("Iterate users: ")

while(userIterator.hasNext()) {
    console.log(userIterator.next())
}*/

const products = new ProductsCollection();
products.addProduct({ name: 'Freezer', value: 4000})
products.addProduct({ name: 'Washing machine', value: 1800})
products.addProduct({ name: 'Blender', value: 500})

const productIterator = products.createIterator();

console.log("Iterate products: ")

while(productIterator.hasNext()) {
    console.log(productIterator.next())
}

console.log("Iterate products - reverse: ")

while(productIterator.hasPrevious()) {
    console.log(productIterator.previous())
}