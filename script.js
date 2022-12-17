// Variable Definition
var songItems = document.getElementById("song-items")
var audioElement = new Audio("songs/1.mp3")
var masterPlayBtn = document.getElementsByClassName("master-play-btn")[0]
var songIndex = 0
var songs = [
  {
    cover: "https://a10.gaanacdn.com/images/albums/21/4020021/crop_480x480_4020021.jpg",
    name: "8 Raflaan",
    artist: "Gurlez Akhtar, Mankirt Aulakh",
    duration: "1:55",
    link: "songs/1.mp3"
  },
  {
    cover: "https://www.gryindia.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-08-at-10.52.33-PM.jpeg",
    name: "Bapu",
    artist: "Sumit Goswami",
    duration: "2:57",
    link: "songs/2.mp3"
  },
  {
    cover: "https://i.scdn.co/image/ab67616d00001e02a15e7c51ad44073a65ca5503",
    name: "Babu Degya",
    artist: "Gulzaar Chhanniwala",
    duration: "3:17",
    link: "songs/3.mp3"
  },
  {
    cover: "https://i.pinimg.com/originals/c7/16/d1/c716d1907798ebdf63df1cfc1436a1de.jpg",
    name: "Bad Munda",
    artist: "Jass Manak",
    duration: "2:57",
    link: "songs/4.mp3"
  },
  {
    cover: "https://i.pinimg.com/originals/97/19/84/9719848b5c98be7b28f97341a8cb9134.jpg",
    name: "Badnam",
    artist: "Mankirt Aulakh",
    duration: "3:24",
    link: "songs/5.mp3"
  },
  {
    cover: "https://pbs.twimg.com/media/El4yOTKVkAAnQOX?format=jpg&name=900x900",
    name: "BamBholle",
    artist: "Laxmi Bomb",
    duration: "3:40",
    link: "songs/6.mp3"
  },
  {
    cover: "https://i1.sndcdn.com/artworks-000217893176-igg61r-t500x500.jpg",
    name: "Bhula Dena",
    artist: "Arijit Singh",
    duration: "4:00",
    link: "songs/7.mp3"
  },
  {
    cover: "https://m.media-amazon.com/images/M/MV5BZjNkMTQwZjAtMWZiMi00MDIxLTgxY2MtOWIxY2ViZjc2N2FlXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_FMjpg_UX1000_.jpg",
    name: "Bijlee Bijlee",
    artist: "harrdy Sandhu",
    duration: "2:48",
    link: "songs/8.mp3"
  },
  {
    cover: "https://britasia.tv/wp-content/uploads/2020/09/Eh09An1VkAEohgB.jpg",
    name: "Brown Munde",
    artist: "AP Dhillon, Gurinder Gill, Shinda Kahlon, Gminxr",
    duration: "4:27",
    link: "songs/9.mp3"
  },
  {
    cover: "https://i.scdn.co/image/ab67616d0000b2736bea051cd7ea7160decffbf8",
    name: "Burj Khalifa",
    artist: "DJ Khushi, Nikhita Gandhi, Madhubanti Bagchi, Shashi",
    duration: "3:07",
    link: "songs/10.mp3"
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