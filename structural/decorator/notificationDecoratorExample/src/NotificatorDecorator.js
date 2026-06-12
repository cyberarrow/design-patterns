const Notificator = require("./Notificator");

class NotificatorDecorator extends Notificator {
  constructor(notificator) {
    super()
    this.notificator = notificator
  }

  send(message) {
    this.notificator.send(message);
  }
}

module.exports = NotificatorDecorator;