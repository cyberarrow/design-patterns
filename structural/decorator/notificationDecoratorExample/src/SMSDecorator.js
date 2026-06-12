
const NotificatorDecorator = require("./NotificatorDecorator");

class SMSDecorator extends NotificatorDecorator {
  send(message) {
    super.send(message)
    console.log(`Enviando mensagem por SMS: ${message}`);
  }
}

module.exports = SMSDecorator;