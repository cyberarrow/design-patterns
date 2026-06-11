class Notificator {
    constructor(message) {
        this.message = message
    }

    send() {
        return this.message
    }
}

module.exports = Notificator;