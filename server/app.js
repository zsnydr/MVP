var express = require('express');
//var db = require('./db');

var app = express();
module.exports.app = app;

app.set('port', 3000);

app.use(express.static(__dirname + '/../client'))

//app.get('',(){})
//app.post('',(){})

app.listen(app.get('port'));
console.log('Listening on ', app.get('port'));
