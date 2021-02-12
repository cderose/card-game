var path = 'images/cards/',
suits = ['C.png', 'D.png', 'H.png', 'S.png']
var rcard = 0
var bcard = 0

// GAMEPLAY //
for (i=0; i < document.querySelectorAll(".button").length; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", function() {
    var buttonText = this.textContent;
    if (buttonText == "Turn Card"){
      turnCard(buttonText);
    } else if (buttonText == "Pass Turn"){
      compTurn(buttonText)
    } else {
      startGame();
    }
  })
}

function turnCard(){
  var randomCardNumber = Math.floor(Math.random() * (15 - 2) + 2);
  var randomSuit = Math.floor(Math.random() * 4);
  var randomCard = path + randomCardNumber + suits[randomSuit];
  if (rcard < 4){
    document.getElementsByClassName('rcard')[rcard].src=randomCard;
    rcard += 1;
  } else {
    console.log("ending game");
    document.getElementsByClassName('rcard')[rcard].src=randomCard;
    endGame();
  }
}

function compTurn(){
  document.getElementById('span').style.display = "inline-block";
  document.getElementsByClassName('turn-card')[0].style.display = "none";
  document.getElementsByClassName('pass-turn')[0].style.display = "none";
  var randomCardNumber = Math.floor(Math.random() * (15 - 2) + 2);
  var randomSuit = Math.floor(Math.random() * 4);
  var randomCard = path + randomCardNumber + suits[randomSuit];
  setTimeout(function(){
    if (bcard < 4){
      document.getElementsByClassName('bcard')[bcard].src=randomCard;
      bcard += 1;
      compChoice();
    } else {
      document.getElementsByClassName('bcard')[bcard].src=randomCard;
      endGame();
    }; }, 1500);
}

function compChoice() {
  var compRandom = Math.floor(Math.random() * 2);
  if (compRandom === 0) {
    setTimeout(function(){
      compTurn(); }, 1500);
  } else {
    document.getElementById('span').style.display = "none";
    document.getElementsByClassName('turn-card')[0].style.display = "inline-block";
    document.getElementsByClassName('pass-turn')[0].style.display = "inline-block";
  }
}




// END GAME AND START OVER //
function endGame(){
  document.getElementById('span').style.display = "none"
  document.getElementsByClassName('turn-card')[0].style.display = "none";
  document.getElementsByClassName('pass-turn')[0].style.display = "none";
  document.getElementsByClassName('new-game')[0].style.display = "inline-block";

}

function startGame(){
  document.getElementsByClassName('new-game')[0].style.display = "none";
  document.getElementsByClassName('turn-card')[0].style.display = "inline-block";
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
