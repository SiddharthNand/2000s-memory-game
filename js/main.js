// Select Elements
const card = document.querySelector('.album-card');

// Functions 
const onCardClicked = function(event) {
  console.log(event.target)
}

// Attach event listeners
card.addEventListener('click', onCardClicked)

