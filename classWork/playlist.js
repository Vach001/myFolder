function Playlist(){
    this.songs = []
    this.currentSongIndex = 0
    this.currentSong = this.songs[this.currentSongIndex - 1]
    
}

function Song (title, artist){
    this.title = title
    this.artist = artist
     
}

Playlist.prototype.add = function(song){
    this.songs.push(song)
}
Playlist.prototype.play = function(){
    this.isPlaying = true
}
Playlist.prototype.stop = function(){
     isPlaying = false
}
Playlist.prototype.next = function(){
    this.currentSongIndex+=1

    this.currentSong = this.songs[this.currentSongIndex]
}

const playlist = new Playlist(); 
const heyJude = new Song("Hey Jude", "The Beatles"); 
const jaded = new Song("Jaded", "Aerosmith"); 
 
playlist.add(heyJude)
playlist.add(jaded)
playlist.next()
console.log(playlist)