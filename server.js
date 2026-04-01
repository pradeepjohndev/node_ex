// const os = require('os')
// const path = require('path')
// const math = require('./Calcul')
// import { read, readFile } from 'fs'
// import fs from 'fs'
// import path from 'path'
// import { add, sub, mul, div } from './Calcul.js'

const { existsSync } = require('fs')
const path = require('path')
const fspromise = require('fs').promises

/* fs.readFile(path.join(__dirname, 'File', 'data.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    else {
        // console.log(data.toString())
        console.log(data)
    }
}) */


if (existsSync(path.join(__dirname, 'File', 'data.txt'))) {
    console.log("File exists")
} else {
    console.log("File does not exist")
}

const result = async () => {
    try {
        const data = await fspromise.readFile(path.join(__dirname, 'File', 'data.txt'), 'utf-8')
        console.log(data)
        await fspromise.writeFile(path.join(__dirname, 'File', 'new.txt'), 'This is new data')
        console.log("write successfully")
        await fspromise.rename(path.join(__dirname, 'File', 'rename.txt'), path.join(__dirname, 'File', 'renamed.txt'))
        console.log("renamed successfully")
        await fspromise.appendFile(path.join(__dirname, 'File', 'new.txt'), '\nNew data to append')
        console.log("append successfully")
        await fspromise.unlink(path.join(__dirname, 'File', 'new.txt'))
        console.log("deleted successfully")
    } catch (err) {
        console.error(err)
    }
}

result()

/* fs.writeFile(path.join(__dirname, 'File', 'new.txt'), 'This is new data', (err) => {
    if (err) throw err;
    else console.log("write successfully")
    fs.rename(path.join(__dirname, 'File', 'renamed.txt'), path.join(__dirname, 'File', 'rename.txt'), (err) => {
        if (err) throw err;
        else {
            console.log("renamed successfully")
        }
    })
})

fs.appendFile(path.join(__dirname, 'File', 'new.txt'), '\nNew data to append', (err) => {
    if (err) throw err;
    else {
        // console.log(data.toString())
        console.log("append successfully")
    }
}) */

// console.log(math.add(2, 3))
// console.log(math.sub(5, 2))
// console.log(math.mul(3, 4))
// console.log(math.div(10, 2))

// console.log(math.add(2, 3))
// console.log(math.sub(5, 2))
// console.log(math.mul(3, 4))
// console.log(math.div(10, 2))
// console.log(os.type(), os.release(), os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)
// const totmem = os.totalmem() / 1024 / 1024 / 1024
// console.log(totmem.toFixed(2) + " GB")
// const freemem = os.freemem() / 1024 / 1024 / 1024
// console.log(freemem.toFixed(2) + " GB")
// console.log(os.uptime())
// console.log(os.hostname())
// console.log(os.networkInterfaces())
// console.log(os.userInfo())
// console.log(__dirname)
// console.log(__filename)
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))
// console.log(path.basename(__filename))
// console.log(path.parse(__filename))
console.log("server running")