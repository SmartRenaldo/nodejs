// const request = require('./request');
// const response = require('./response');

module.exports = {
    ...require('./request'),
    ...require('./response'),
}

// module.exports = {
//     REQUSER_TIMEOUT: request.REQUEST_TIMEOUT,
//     send: request.send,
//     read: response.read,
// }