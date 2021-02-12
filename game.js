var rcard = 0
var bcard = 0
var lastRed = 0
var lastBlue = 0
var path = 'images/cards/'
suits = ['C.png', 'D.png', 'H.png', 'S.png']

// GAMEPLAY //
for (i = 0; i < document.querySelectorAll(".button").length; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", function() {
    var buttonText = this.textContent;
    if (buttonText == "Higher Card") {
      humanHigher(buttonText);
    } else if (buttonText == "Lower Card") {
      humanLower(buttonText);
    } else if (buttonText == "Change Card") {
      compTurn(buttonText)
    } else {
      startGame();
    }
  })
}

function humanWins() {
  setTimeout(function() {
    document.getElementsByClassName('human-wins')[0].style.display = "inline-block"; endGame();}, 1000);
}

function hWrongGuess() {
  setTimeout(function() {
    document.getElementsByClassName('rcard')[rcard].src = "images/red-cards.jpg";
    compTurn();
  }, 1500);
}

function humanHigher() {
  var randomCard = drawnCard();
  document.getElementsByClassName('rcard')[rcard].src = randomCard[0];
  if (randomCard[1] > lastRed) {
    if (rcard < 4) {
      rcard += 1;
      lastRed = randomCard[1];
    } else {
      humanWins();
    }
  } else {
    hWrongGuess();
  }
}

function humanLower() {
  var randomCard = drawnCard();
  document.getElementsByClassName('rcard')[rcard].src = randomCard[0];
  if (randomCard[1] < lastRed) {
    if (rcard < 4) {
      rcard += 1;
      lastRed = randomCard[1];
    } else {
      humanWins();
    }
  } else {
    hWrongGuess();
  }
}

function compTurn() {
  document.getElementsByClassName('higher-card')[0].style.display = "none";
  document.getElementsByClassName('lower-card')[0].style.display = "none";
  var compChoice = Math.floor(Math.random() * 2);
  if (compChoice === 0) {
    document.getElementById('comp-higher').style.display = "inline-block";
    setTimeout(function(){compHigher();}, 1000);
  } else {
    document.getElementById('comp-lower').style.display = "inline-block";
    setTimeout(function(){compLower();;}, 1000);
  }
}

function compWins() {
  setTimeout(function() {
    document.getElementsByClassName('computer-wins')[0].style.display = "inline-block"; endGame();}, 1000);
}

function cWrongGuess(){
  setTimeout(function() {
    document.getElementsByClassName('bcard')[bcard].src = "images/blue-cards.jpg";
    document.getElementById('comp-higher').style.display = "none";
    document.getElementById('comp-lower').style.display = "none";
    document.getElementsByClassName('higher-card')[0].style.display = "inline-block";
    document.getElementsByClassName('lower-card')[0].style.display = "inline-block";
  }, 1500);
}

function compHigher() {
  var randomCard = drawnCard();
  document.getElementsByClassName('bcard')[bcard].src = randomCard[0];
  if (randomCard[1] > lastBlue) {
     setTimeout(function(){
       if (bcard < 4) {
         bcard += 1;
         lastBlue = randomCard[1];
         document.getElementById('comp-higher').style.display = "none";
         compTurn();
       } else {
         compWins();
       }
     }, 1500);
  } else {
    cWrongGuess();
  }
}

function compLower() {
  var randomCard = drawnCard();
  document.getElementsByClassName('bcard')[bcard].src = randomCard[0];
  if (randomCard[1] < lastBlue) {
     setTimeout(function(){
       if (bcard < 4) {
         bcard += 1;
         lastBlue = randomCard[1];
         document.getElementById('comp-lower').style.display = "none";
         compTurn();
       } else {
         compWins();
       }
     }, 1500);
  } else {
    cWrongGuess();
  }
}

// START AND END SETTINGS //
document.querySelector('button[type="human-wins"]').addEventListener("click", function(){
	document.getElementsByClassName('human-wins')[0].style.display = "none";
})

document.querySelector('button[type="computer-wins"]').addEventListener("click", function(){
	document.getElementsByClassName('computer-wins')[0].style.display = "none";
})

function drawnCard() {
  var randomCardNumber = Math.floor(Math.random() * (15 - 2) + 2);
  var randomSuit = Math.floor(Math.random() * 4);
  var randomCard = path + randomCardNumber + suits[randomSuit];
  return [randomCard, randomCardNumber];
}

function startGame() {
  document.getElementsByClassName('new-game')[0].style.display = "none";
  document.getElementsByClassName('higher-card')[0].style.display = "inline-block";
  document.getElementsByClassName('lower-card')[0].style.display = "inline-block";
  // document.getElementsByClassName('pass-turn')[0].style.display = "inline-block";
  rcard = 0;
  bcard = 0;
  for (i = 0; i < document.querySelectorAll(".rcard").length; i++) {
    document.querySelectorAll(".rcard")[i].src = "images/red-cards.jpg";
  }
  for (i = 0; i < document.querySelectorAll(".bcard").length; i++) {
    document.querySelectorAll(".bcard")[i].src = "images/blue-cards.jpg";
  }
  var randomRedCard = drawnCard();

  // draw starting cards
  document.getElementsByClassName('rcard')[rcard].src = randomRedCard[0];
  rcard += 1;
  lastRed = randomRedCard[1]
  var randomBlueCard = drawnCard();
  document.getElementsByClassName('bcard')[bcard].src = randomBlueCard[0];
  bcard += 1;
  lastBlue = randomBlueCard[1]
}

function endGame() {
  document.getElementById('comp-higher').style.display = "none"
  document.getElementById('comp-lower').style.display = "none"
  document.getElementsByClassName('higher-card')[0].style.display = "none";
  document.getElementsByClassName('lower-card')[0].style.display = "none";
  // document.getElementsByClassName('pass-turn')[0].style.display = "none";
  document.getElementsByClassName('new-game')[0].style.display = "inline-block";
}
