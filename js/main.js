// Select Elements
const card  = document.querySelector('.album-card')

// Functions 
const onCardClicked = function (event) {
  console.log(event.target)
  
  flipCard(event.target)
  
  setTimeout(function () {
    flipCardBack(event.target)
  }, 2000)
}

const flipCard = function (card) {
  card.classList.remove('.back-face')
}
 
const flipCardBack = function () {
  card.classList.add('.back-face')
}

// Attach event listeners
card.addEventListener('click', onCardClicked)

