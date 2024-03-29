// Elements
const albums  = document.querySelectorAll('.albumCell')

let firstAlbum



// Functions
const onAlbumClicked = function (event) {
  flipAlbum(event.target)


  if (firstAlbum === undefined){
    firstAlbum = event.target
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

const shuffle = function () {
  albums.forEach(function (album) {
    let randomIndex = Math.floor(Math.random() * albums.length)
    album.parentNode.insertBefore(album, albums[randomIndex])
  })
}
shuffle ()

