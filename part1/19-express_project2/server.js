const express = require('express');

const app = express();

const PORT = 3030;

const friends = [
    {
        id: 0,
        name: 'Elbert Einstein',
    },
    {
        id: 1,
        name: 'Sir Tesla',
    }
];

app.get('/friends', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    console.log(friendId);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
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