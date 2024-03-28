function createSong(name, artist, favorite) {
  var song = {
    name: name,
    artist: artist,
    favorite: favorite || false,
    hasBeenPlayed: false
  }
  return song;
}

function playSong(song) {
  song.hasBeenPlayed = true;
  return song;
}

function makePlaylist(name, songs) {
  var playlist = {
    name: name,
    songs: songs
  }
  return playlist;
}

function addSongToPlaylist(playlist, song) {
  playlist.songs.push(song);
  return playlist;
}

function playSongs(playlist, favorites) {
  playlist.songs.forEach(function(song) {
    if (song.favorite === true && favorites === "favorites only") {
      playSong(song);
    } else if (favorites === undefined) {
      playSong(song);
    }

  })
  return playlist;
}

module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
