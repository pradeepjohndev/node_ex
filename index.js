// const { add, sub, mul, div } = require('./Calcul.js')
// const { logEvent } = require('./Logevent.js')

// setInterval(() => {
//     logEvent("This is a log message")
// }, 2000);

/* console.log(add(2, 3))
console.log(sub(5, 2))
console.log(mul(3, 4))
console.log(div(10, 2)) */

const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome to the homepage")
        res.end()
    }
    else if (req.url === "/about") {
        res.write("Hello World")
        res.end()
    }
    else if (req.url === "/contact") {
        res.write("Contact us at contact@example.com")
        res.end()
    }
    else {
        res.write("Page not found")
        res.end()
    }
})

server.listen(port, (error) => {
    if (error) {
        console.error('Error occurred while starting the server:', error)
    } else {
        console.log(`Server is running on http://localhost:${port}`)
    }
})