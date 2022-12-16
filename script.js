// Variable Definition
var songItems = document.getElementById("song-items")
var audioElement = new Audio("songs/1.mp3")
var masterPlayBtn = document.getElementsByClassName("master-play-btn")[0]
var songIndex = 0
var songs = [
  {
    cover: "https://britasia.tv/wp-content/uploads/2020/09/Eh09An1VkAEohgB.jpg",
    name: "Brown Munde",
    artist: "AP Dhillon, Gurinder Gill, Shinda Kahlon, Gminxr",
    duration: "4:14",
    link: "songs/1.mp3"
  },
  {
    cover: "https://i.scdn.co/image/ab67616d0000b2732ad20dea9fd501af01c954f3",
    name: "Jehda Nasha",
    artist: "Yohani, Amar Jalal, Harjot Kaur, IP Singh",
    duration: "2:02",
    link: "songs/2.mp3"
  }
]

// Building song item html structure
function createSongItem(songIndex) {
  // Creating elements
  var songItem = document.createElement("div")
  var songCover = document.createElement("img")
  var songInfo = document.createElement("div")
  var songNameArtist = document.createElement("div")
  var songName = document.createElement("p")
  var songArtist = document.createElement("p")
  var songDuration = document.createElement("p")
  var songControl = document.createElement("img")
  
  // Create Text Nodes
  var songNameText = document.createTextNode(`${songs[songIndex].name}`)
  var songArtistText = document.createTextNode(`${songs[songIndex].artist}`)
  var songDurationText = document.createTextNode(`${songs[songIndex].duration}`)
  
  // Add classes to the elements
  songItem.classList.add("song-item")
  songCover.classList.add("song-cover")
  songInfo.classList.add("song-info")
  songNameArtist.classList.add("song-name-artist")
  songName.classList.add("song-name")
  songArtist.classList.add("song-artist")
  songDuration.classList.add("song-duration") 
  songControl.classList.add("song-control")
  songControl.setAttribute("id", `${i}`)
  
  // Add Links to images
  songCover.src = `${songs[songIndex].cover}`
  songControl.src = "icons/play.png"
  
  // Append related elements
  songItem.appendChild(songCover)
  songItem.appendChild(songInfo)
  songInfo.appendChild(songNameArtist)
  songNameArtist.appendChild(songName)
  songNameArtist.appendChild(songArtist)
  songInfo.appendChild(songDuration)
  songItem.appendChild(songControl)
  
  songName.appendChild(songNameText)
  songArtist.appendChild(songArtistText)
  songDuration.appendChild(songDurationText)
  
  songItems.appendChild(songItem)
}

// Loop throught each and every song and display them on the screen
for(var i = 0; i < songs.length; i++) {
  createSongItem(i)
}

// run playSong function
masterPlayBtn.addEventListener("click", (e) => {
    audioElement.play()
    masterPlayBtn.src = "icons/pause.png"
    // console.log(e.target.classList)
})

Array.from(document.getElementsByClassName("song-control")).forEach((element) => {
    element.addEventListener("click", (e) => {
        songIndex = parseInt(e.target.id)
        // console.log(songIndex)
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.play()
        songClass = document.getElementsByClassName(`${e.target.classList.value}`)[songIndex]
        songClass.src = "icons/pause.png"
    })
})