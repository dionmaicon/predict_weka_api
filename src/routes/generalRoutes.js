'use strict';
//  this file have a simple task of to give  legibility in the server.js
var x = {
  add : (app, route) =>{
    let routes = require('./'+route);
    routes(app);  
  }
};
module.exports = x;
