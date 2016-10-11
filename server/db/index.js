var mysql = require('mysql');

var connection = mysql.createConnection({
  user: '',
  password: '',
  database: 'muse'
});

connection.connect();

module.exports = connection;
