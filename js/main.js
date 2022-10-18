// Elements
const albums = document.querySelectorAll('.gameboard')

let firstAlbumMatchClicked = false

let firstAlbumMatch

// Functions

const onAlbumClicked = function (event) {
 
    flipAlbum(event.target)
}


