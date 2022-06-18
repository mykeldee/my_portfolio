const http = require('http');
const fs = require('fs');
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    try {
        let htmlFile;
        if((req.url === '/') || (req.url === '/home')) {
            htmlFile = 'index.html';
        } else if (req.url === '/about') {
            htmlFile = 'about.html';
        } else if (req.url === '/contact') {
            htmlFile = 'contact.html';
        } else {
            res.writeHead(404);
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(htmlFile).pipe(res);
    } catch (err) {
        res.writeHead(404)
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});