class SMSService {
    send(to, message) {
        console.log(`Enviando SMS para o número ${to}: ${message}`)
    }
}

module.exports = SMSService;