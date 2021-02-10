var path = 'images/cards/',
suits = ['C.png', 'D.png', 'H.png', 'S.png']
var rcard = 0
var bcard = 0

// GAMEPLAY //
for (i=0; i < document.querySelectorAll(".button").length; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", function() {
    var buttonText = this.textContent;
    if (buttonText != "Start Over"){
      flipCard(buttonText);
    } else {
      startGame();
    }
  })
}

function flipCard(options){
  var randomCardNumber = Math.floor(Math.random() * (15 - 2) + 2);
  var randomSuit = Math.floor(Math.random() * 4);
  var randomCard = path + randomCardNumber + suits[randomSuit];
  switch (options) {
    case "Turn Card":
      if (rcard < 4){
        document.getElementsByClassName('rcard')[rcard].src=randomCard;
        rcard += 1;
      } else {
        document.getElementsByClassName('rcard')[rcard].src=randomCard;
        endGame();
      }
      break;
    case "Pass":
    if (bcard < 4){
      document.getElementsByClassName('bcard')[bcard].src=randomCard;
      bcard += 1;
    } else {
      document.getElementsByClassName('bcard')[bcard].src=randomCard;
      endGame();
    }
    break;
  }
}

// END GAME AND START OVER //
function endGame(){
  document.getElementsByClassName('turn-card')[0].innerText = "Start Over";
  document.getElementsByClassName('pass-turn')[0].style.display = "none";
}

function startGame(){
  document.getElementsByClassName('turn-card')[0].innerText = "Turn Card";
  document.getElementsByClassName('pass-turn')[0].style.display = "inline-block";
  rcard = 0;
  bcard = 0;
  for (i=0; i < document.querySelectorAll(".rcard").length; i++) {
    document.querySelectorAll(".rcard")[i].src="images/red-cards.jpg";
  }
  for (i=0; i < document.querySelectorAll(".bcard").length; i++) {
    document.querySelectorAll(".bcard")[i].src="images/blue-cards.jpg";
  }
}
