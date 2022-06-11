const http = require('http');
const fs = require('fs');

const port = 8080;


const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url === '/about') {
        fs.readFile('about.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('404, Page Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } 

    if (req.url === '/contact-me') {
        fs.readFile('contact-me.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('404, Page Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }

    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('404, Page Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }

})

server.listen(port, err => {
    if (err) {
        fs.readFile('404.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('404, Page Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else {
        console.log('Server listening on port ' + port)
    }
})
