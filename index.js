// Day 1 create server
const http = require('http');

const server = http.createServer( (req, res) => {
    res.end('hello from server');
})

server.listen(8000,'127.0.0.1', () => {
    console.log('server running');
})