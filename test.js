function compTurn(){
  document.getElementsByClassName('higher-card')[0].style.display = "none";
  document.getElementsByClassName('lower-card')[0].style.display = "none";
  document.getElementsByClassName('pass-turn')[0].style.display = "none";
  var randomCard = drawnCard();
  var lastBlue = bhand.pop();
  var compRandom = Math.floor(Math.random() * 2);
  if (compRandom === 0) {
    document.getElementById('comp-higher').style.display = "inline-block";
    document.getElementsByClassName('bcard')[bcard].src=randomCard[0];
    if (randomCard[1] > lastBlue) {
        if (bcard < 4) {
          bcard += 1;
          bhand.push(randomCard[1]);
        } else {
          endGame();
        }
    } else {
      document.getElementsByClassName('rcard')[rcard].src=randomCard[0];
      setTimeout(function(){
        document.getElementsByClassName('rcard')[rcard].src="images/red-cards.jpg"; compTurn();
      }, 1500);
    }


  } else {
    document.getElementById('comp-lower').style.display = "inline-block";
  }


//   setTimeout(function(){
//     if (bcard < 4){
//       document.getElementsByClassName('bcard')[bcard].src=randomCard[0];
//       bcard += 1;
//       bhand.push(randomCard[1]);
//       compChoice();
//     } else {
//       document.getElementsByClassName('bcard')[bcard].src=randomCard[0];
//       endGame();
//     }; }, 1500);
// }



function compLost() {
  // var compRandom = Math.floor(Math.random() * 2);
  // if (compRandom === 0) {
  //   setTimeout(function(){
  //     compTurn();
  //   }, 1500);
  // } else {
  document.getElementById('comp-higher').style.display = "none";
  document.getElementsByClassName('higher-card')[0].style.display = "inline-block";
  document.getElementsByClassName('lower-card')[0].style.display = "inline-block";
  document.getElementsByClassName('pass-turn')[0].style.display = "inline-block";
  // }
}
