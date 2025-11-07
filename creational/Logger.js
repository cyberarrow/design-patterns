class Logger {
    constructor() {
        this.logs = []
    }

    createLog(message) {
        this.logs.push(message)
        console.log(`Log created: ${message}`)
    }

    print() {
        console.log(this.logs.length)
    }
}

module.exports = Logger