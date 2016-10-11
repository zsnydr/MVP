
app = {

  server: 'http://localhost:3000/',

  currentView: 'artists',

  init: function() {
    app.loadCollection();
    $('.artist').on('click', app.loadCollection());
    // $('.album').on('click', app.loadCollection());
    // $('.song').on('click', app.loadCollection());
  },

  setCurrentView: function(view) {
    app.currentview = view;
  },

  renderArtist: function(artist) {
    var $artist = $('<div>', {class: 'artist'}).text(artist.name);
    return $artist;
  },

  displayArtist: function(artist) {
    var $html = app.renderArtist(artist);
    $('.main').append($html);
  },

  renderAlbum: function() {},
  displayAlbum: function() {
    // call renderAlbum
  },

  renderSong: function() {},
  displaySong: function() {
    // call renderSong
  },

  displayCollection: function(data) {
    $('.main').html('');

    if (app.currentview === 'artists') {
      for (var i = 0; i < data.length; i++) {
        app.displayArtist(data[i]);
      }
    } else if (app.currentview === 'albums') {
      for (var i = 0; i < data.length; i++) {
        app.displayArtist(data[i]);
      }
    } else {
      for (var i = 0; i < data.length; i++) {
        app.displayArtist(data[i]);
      }
    }
  },

  loadCollection: function() {
    $.ajax({
      type: 'GET',
      url: app.server + app.currentView,
      contentType: 'application/json',
      success: function(results) {
        app.displayCollection(JSON.parse(results));
      },
      error: function(error) {
        console.log('AJAX ERROR ', error);
      }
    });
  }

};
