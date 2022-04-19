function getMessages(req, res) {
    res.send('<ul><li>Helllo Einstein</li></ul>');
}

// do not response so will sending request continuously
function postMessages(req, res) {
    console.log('Updating messages...');
};

module.exports = {
    getMessages,
    postMessages,
}
