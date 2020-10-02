
// action creator
const selectSong = (song) => {
  
  // return an action - object
  return {
    type: 'song_selected',
    payload: song
  }
}