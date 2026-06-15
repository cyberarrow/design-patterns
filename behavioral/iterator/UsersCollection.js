const Iterator = require("./Iterator");

class UsersCollection {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    createIterator() {
        return new Iterator(this.users);
    }
}

module.exports = UsersCollection;