const { v4: uuidv4 } = require('uuid')
const { format } = require('date-fns')
const fspromise = require('fs').promises
const path = require('path')

const logEvent = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`
    console.log(logItem)
    try {
        await fspromise.appendFile(path.join(__dirname, 'File', 'Log.txt'), logItem, () => {
            console.log("Log added successfully")
        })
    }
    catch (err) {
        console.error(err)
    }
}

module.exports = { logEvent }