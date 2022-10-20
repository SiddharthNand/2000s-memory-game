// Select Elements
const albums  = document.querySelectorAll('.album-card')

// Functions 
const onAlbumClicked = function (event) {
  console.log(event.target)
  
  flipAlbum(event.target)
  
  setTimeout(function () {
    flipAlbumBack(event.target)
  }, 2000)
}

const flipAlbum = function (album) {
  album.classList.remove('.back-face')
}
 
const flipAlbumBack = function (album) {
  album.classList.add('.back-face')
}

// Attach event listeners

albums.forEach(function (album) {
  album.addEventListener('click', onAlbumClicked)
})