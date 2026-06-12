class PushNotificationService {
    send(to, message) {
        console.log(`Enviando notificação para o usuário ${to}: ${message}`)
    }
}

module.exports = PushNotificationService;