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
      next();
      res.end()
      break;
    case 'GET':
      let body = [];
      let commands = ['up', 'down', 'left', 'right'];
      body.push(commands[Math.floor(Math.random() * commands.length)]);
      res.writeHead(200, headers);
      res.end(body);
      next();
      break;
    });
  }
};

