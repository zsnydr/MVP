var express = require('express');
//var queries = require('queries');
//var db = require('./db');

var app = express();
module.exports.app = app;

app.set('port', 3000);

app.use(express.static(__dirname + './../client/public'))

app.get('/artists', function(req, res) {
  console.log('INSIDE OF GET')

  res.json(JSON.stringify([{ID: 1, name: 'MUSE'}, {ID: 2, name: 'Terror'}, {ID: 3, name: 'Ellie Goulding'}]));
  // queries.artists(function(err, results) {
  //   if (err) {
  //     console.log('ERROR ', err);
  //   }
  //   res.json(results);
  // })
});


app.listen(app.get('port'));
console.log('Listening on ', app.get('port'));
