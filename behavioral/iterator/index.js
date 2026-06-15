class UsersCollection {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user)
    }

    fetchAll() {
        for(let i = 0; i < this.users.length; i++) {
            console.log(this.users[i])
        }
    }
}

const users = new UsersCollection();
users.addUser({ name: "Jon", age: 17 })
users.addUser({ name: "Sandor", age: 27 })

users.fetchAll()