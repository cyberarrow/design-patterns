const UsersCollection = require('./UsersCollection')

const users = new UsersCollection();
users.addUser({ name: "Jon", age: 17 })
users.addUser({ name: "Sandor", age: 27 })

const userIterator = users.createIterator(this.users);

console.log("Iterate users: ")

while(userIterator.hasNext()) {
    console.log(userIterator.next())
}