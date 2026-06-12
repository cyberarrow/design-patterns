const NotificatorDecorator = require("./NotificatorDecorator");

class SlackDecorator extends NotificatorDecorator {
    send(message) {
        super.send(message)
        console.log(`Enviando mensagem por Slack: ${message}`)
    }
}

module.exports = SlackDecorator;