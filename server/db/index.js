var mysql = require('mysql');

var connction = mysql.createConnection({
  user: '',
  password: '',
  database: 'muse'
});

connection.connect();

module.exports = connection;
