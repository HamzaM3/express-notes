const http = require('http');
const EventEmitter = require('events');

const requestEvent = new EventEmitter();

requestEvent.on('response', (res) => {
  
})