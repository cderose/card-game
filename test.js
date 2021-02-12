if (randomCard[1] > lastBlue) {
  setTimeout(function(){
    if (bcard < 4){
      document.getElementsByClassName('bcard')[bcard].src=randomCard[0];
      bcard += 1;
      bhand.push(randomCard[1]);
    } else {
      document.getElementsByClassName('bcard')[bcard].src=randomCard[0];
      endGame();
    }
  }
