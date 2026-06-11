const Notificator = require('./src/Notificator')

let notify = new Notificator('Mnha notificação');

console.log(notify.send())