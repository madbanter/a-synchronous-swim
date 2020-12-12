const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  switch(req.method) {
    case 'OPTIONS':
      res.writeHead(200, headers);
      break;
    case 'GET':
      let body = [];
      let directions = ['left', 'right', 'up', 'down'];
      let direction = directions[Math.floor(Math.random() * directions.length)];
      body.push(direction);
      res.writeHead(200, headers);
      body = body.toString();
      res.write(body);
      break;
  }
  res.end();
  next(); // invoke next() at the end of a request to help with testing!
};

