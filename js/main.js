//Elements
const albums  = document.querySelectorAll('.albumCell')

//Functions
const onAlbumClicked = function (event) {
  flipAlbum(event.target)
  

  setTimeout(function () {
    flipAlbumBack(event.target)
    }, 2000)
  }

const flipAlbum = function (album) {
  album.classList.remove('albumBack')
}
 
const flipAlbumBack = function (album) {
  album.classList.add('albumBack')
}





//Event listeners
albums.forEach(function (album) {
  album.addEventListener('click', onAlbumClicked)
})




