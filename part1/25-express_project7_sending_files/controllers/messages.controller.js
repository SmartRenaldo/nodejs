const path = require('path');

function getMessages(req, res) {
    // res.send('<ul><li>Helllo Einstein</li></ul>');
    res.sendFile(path.join(__dirname, '..', 'public', 'img1.png'));
}

// do not response so will sending request continuously
function postMessages(req, res) {
    console.log('Updating messages...');
};

module.exports = {
    getMessages,
    postMessages,
}
