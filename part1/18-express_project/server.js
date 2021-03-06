const express = require('express');

const app = express();

const PORT = 3030;

app.get('/', (req, res) => {
    res.send({
        id: 1,
        name: 'Sir Tesla',
    });
});

app.get('/messages', (req, res) => {
    res.send('<ul><li>Helllo Einstein</li></ul>');
});

app.post('/messages', (req, res) => {
    console.log('Updating messages...');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});