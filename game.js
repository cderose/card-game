for (i=0; i < document.querySelectorAll(".button").length; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", function() {
    var buttonText = this.textContent;
    flipCard(buttonText);
  })
}

function flipCard(key){
  switch (key) {
    case "Turn Card":
      document.getElementsByClassName('rcard')[0].src="images/cards/2H.png"
      break;
    case "Pass":
      document.getElementsByClassName('bcard')[0].src="images/cards/2H.png"
      break;
    default: console.log(this.textContent);
  }
}
