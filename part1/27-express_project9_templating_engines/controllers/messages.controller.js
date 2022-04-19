const path = require('path');

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'img1.png'));
}

// do not response so will sending request continuously
function postMessages(req, res) {
    console.log('Updating messages...');
};

module.exports = {
    getMessages,
    postMessages,
}
