const http = require('http');

const PORT = 3030;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'application/json',
    });
    res.end(JSON.stringify({
        id: 1,
        name: 'Elon Mask'
    }));
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); // localhost
