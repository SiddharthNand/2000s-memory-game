// Select Elements
const albums  = document.querySelectorAll('.album-card')

let isFirstSameAlbumClicked = false

let firstPairAlbum

// Functions 
const onAlbumClicked = function (event) {
  flipAlbum(event.target)
if(isFirstSameAlbumClicked === true) {
  if (event.target !== firstPairAlbum){
    if (event.target.textContent.trim() === firstPairAlbum.textContent.trim()) {
      console.log('found match')
      event.target.classList.add('matched-album')
      firstPairAlbum.classList.add('matched-album')
    } else {
      setTimeout(function () {
        flipAlbumBack(firstPairAlbum)
      }, 2000)
  }
}

  isFirstSameAlbumClicked = false
} else {
  isFirstSameAlbumClicked = true
  firstPairAlbum = event.target
}
  // console.log(isFirstAlbumClicked)
  // isFirstAlbumClicked = true
  // console.log(isFirstAlbumClicked)
}

const flipAlbum = function (album) {
  album.classList.remove('back-face')
}
 
const flipAlbumBack = function (album) {
  album.classList.add('back-face')
}

// Attach event listeners

albums.forEach(function (album) {
  album.addEventListener('click', onAlbumClicked)
})




