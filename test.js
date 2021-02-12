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
         setTimeout(function() {
           document.getElementsByClassName('computer-wins')[0].style.display = "inline-block"; endGame();}, 1000);
       }
     }, 1500);
  } else {
    bWrongGuess();
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
         setTimeout(function() {
           document.getElementsByClassName('computer-wins')[0].style.display = "inline-block"; endGame();}, 1000);
       }
     }, 1500);
  } else {
    bWrongGuess();
  }
}
