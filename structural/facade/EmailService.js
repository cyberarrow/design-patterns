class EmailService {
    send(to, message) {
        console.log(`Enviando email para ${to}: ${message}`)
    }
}

module.exports = EmailService;