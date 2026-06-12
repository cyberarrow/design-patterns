const Notificador = require('./src/Notificator');
const NotificadorDecorator = require('./src/NotificatorDecorator');
const SMS = require('./src/SMSDecorator');
const Slack = require('./src/SlackDecorator');


const notificadorBase = new Notificador();

const notificadorSMS = new SMS(notificadorBase)

const notificadorSlack = new Slack(notificadorSMS)

const notificadorSlack2 = new Slack(notificadorSlack)

notificadorSlack2.send('Sistema em manutenção!')