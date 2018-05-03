var playlist = {coldplay: "Fix You"}
function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
