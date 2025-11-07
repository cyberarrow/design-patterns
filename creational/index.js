const log = require('./Logger')

const activite1 = new log()
const activite2 = new log()

activite1.createLog("S3 bucket is receiving new files")
activite2.createLog("S3 bucket is receiving new folders")

activite1.print()
activite2.print()