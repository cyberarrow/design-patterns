const NotificationFacade = require("./NotificationFacade")

const notifier= new NotificationFacade()

const brandonBroEmail = notifier.sendNotification("email", "Eddard", "Hey, should we schedule the meeting right now?")

const noOnePhone = notifier.sendNotification("sms", "Arya", "TGIF!")

const cerseiDiscordUser = notifier.sendNotification("push", "Sansa", "What a bomb! What have you done lately?")