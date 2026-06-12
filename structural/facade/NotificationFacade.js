const EmailService = require("./EmailService");
const PushNotificationService = require("./PushNotificationService");
const SMSService = require("./SMSService");

class NotificationFacade {
    constructor() {
        this.emailService = new EmailService;
        this.smsService = new SMSService;
        this.pushNotificationService = new PushNotificationService;
    }

    sendNotification(type, to, message) {
        switch (type) {
            case "email":
                this.emailService.send(to, message)
                break;
            case "sms":
                this.smsService.send(to, message)
                break;
            case "push":
                this.pushNotificationService.send(to, message)
                break;        
            default:
                console.log('Tipo de notificação inválido!')
                break;
        }

    }
}

module.exports = NotificationFacade;