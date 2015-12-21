/*jshint node:true */
'use strict';

const app = require('./app.js');

var config = require('../config');

app.listen(config.port, config.host, function(){
  console.log("Server running at " + config.host + ":" + config.port );
});
