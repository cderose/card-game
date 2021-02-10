var path = 'images/cards/',
suits = ['C.png', 'D.png', 'H.png', 'S.png']
var randomCardNumber = Math.floor(Math.random() * (15 - 2) + 2);
var randomSuit = Math.floor(Math.random() * 4)
var randomCard = path + randomCardNumber + suits[randomSuit];

// CLICK A BUTTON TO PLAY
for (i=0; i < document.querySelectorAll(".button").length; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", function() {
    var buttonText = this.textContent;
    flipCard(buttonText);
  })
}

function flipCard(key){
  switch (key) {
    case "Turn Card":
      document.getElementsByClassName('rcard')[0].src=randomCard
      console.log(randomCard)
      break;
    case "Pass":
      document.getElementsByClassName('bcard')[0].src=randomCard
      break;
    default: console.log(this.textContent);
  }
}
