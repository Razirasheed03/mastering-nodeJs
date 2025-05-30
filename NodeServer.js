const http = require('http')

const os = require('os')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('hii')
})


server.listen(3000, () => {
    console.log('server on port 3000')
})