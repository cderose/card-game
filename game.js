var path = 'images/cards/',
suits = ['C.png', 'D.png', 'H.png', 'S.png']
var rcard = 0
var bcard = 0

// CLICK A BUTTON TO PLAY
for (i=0; i < document.querySelectorAll(".button").length; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", function() {
    var buttonText = this.textContent;
    if (buttonText != "Start Over"){
      flipCard(buttonText);
    } else {
      console.log("need to restart")
    }
  })
}

function flipCard(key){
  var randomCardNumber = Math.floor(Math.random() * (15 - 2) + 2);
  var randomSuit = Math.floor(Math.random() * 4)
  var randomCard = path + randomCardNumber + suits[randomSuit];
  switch (key) {
    case "Turn Card":
      if (rcard < 4){
        document.getElementsByClassName('rcard')[rcard].src=randomCard
        rcard += 1;
      } else {
        document.getElementsByClassName('rcard')[rcard].src=randomCard
        endGame()
      }
      break;
    case "Pass":
    if (bcard < 4){
      document.getElementsByClassName('bcard')[bcard].src=randomCard
      bcard += 1;
    } else {
      document.getElementsByClassName('bcard')[bcard].src=randomCard
      endGame()
    }
    break;
  }
}

function endGame(){
  document.getElementsByClassName('turn-card')[0].innerText = "Start Over"
  document.getElementsByClassName('pass-turn')[0].style.display = "none"
}
