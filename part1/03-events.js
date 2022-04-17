// observer design pattern

const EventEmitter = require('events');
const hot = new EventEmitter();

// subscribe to hot for observer 1
hot.on('race win', () => {
    console.log('Cool! You are the best!');
});

// subscribe to hot for observer 2
hot.on('race win', () => {
    console.log('Boo.');
});

// Node will normally exit with a 0 status code when no more async operations are pending. 
process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
})

hot.emit('race win');
hot.emit('race lost');
hot.emit('race win');