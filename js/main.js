// Elements
const albums  = document.querySelectorAll('.albumCell')

let firstAlbum 

// Functions
const onAlbumClicked = function (event) {
  flipAlbum(event.target)


  if (firstAlbum === undefined){
    firstAlbum = event.target
    console.log(firstAlbum)
  } else {
    if (firstAlbum.dataset.id != event.target.dataset.id) {
    setTimeout(function () {
      flipAlbumBack(event.target)
      flipAlbumBack(firstAlbum)
      firstAlbum = undefined
      }, 1000)
      }else if (firstAlbum.dataset.id === event.target.dataset.id) {
      firstAlbum = undefined
    }
  }
}
  
const flipAlbum = function (album) {
  album.classList.remove('albumBack')
}
 
const flipAlbumBack = function (album) {
  album.classList.add('albumBack')
}


// Event Listeners
albums.forEach(function (album) {
  album.addEventListener('click', onAlbumClicked)
})




