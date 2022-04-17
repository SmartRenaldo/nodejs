const http = require('http');

const PORT = 3030;

const server = http.createServer();

const friends = [
    {
        id: 0,
        username: 'Lady Gaga',
    },
    {
        id: 1,
        username: 'Morrison',
    },
    {
        id: 2,
        username: 'Ross',
    },
]

server.on('request', (req, res) => {
    // items: /friends/2 => ['', 'friends', '2']
    const items = req.url.split('/');
    if (items[1] == 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length == 3) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (items[1] == 'message') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Elon!</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); // localhost
