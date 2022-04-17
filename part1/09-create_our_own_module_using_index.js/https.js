// index.js file helps https.js use module in other files in internals folder
const { send, read } = require('./internals');
// const { send } = require('./request');
// const { read } = require('./response');

function makeRequest(url, data) {
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);
