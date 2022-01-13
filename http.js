const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<b>Welcome to our home page</b>');
    }
    if (req.url === '/about') {
        res.end('Here is our short story!!');
    }

})

server.listen(5000)