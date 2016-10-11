var db = require('./db');

var queries = {

  artists: function(cb) {

    var qString = 'SELECT * FROM artists ORDER BY name';

    db.query(qString, function(err, results) {
      callback(err, results);
    });
  },

  albums: function(artist, cb) {

    var qString = 'SELECT * FROM albums \
                   WHERE fk_artistId = (SELECT ID FROM artists \
                   WHERE name = ?) ORDER BY release';

    db.query(qString, [artist], function(err, results) {
      callback(err, results);
    });
  },

  songs: function(album, cb) {

    var qString = 'SELECT * FROM songs \
                   WHERE fk_albumId = (SELECT ID FROM albums \
                   WHERE name = ?) ORDER BY track_num';

    db.query(qString, [album], function(err, results) {
      callback(err, results);
    });
  }
};

module.exports = queries;
