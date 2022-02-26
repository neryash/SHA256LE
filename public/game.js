var guess = "";
var LENGTH = 10;
var attempts = 0;
var letterAt = 0;
const currWord = "g23ty25543"
// const currWord = "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824";
function setMyKeyDownListener() {
    window.addEventListener(
      "keydown",
      function(event) {handleKeydown(event.key)}
    )
}

function handleKeydown(eventKey) {
  if(true){
    if (eventKey === "Enter") { // In case of enter
      if (guess.length == LENGTH){

        makeAttempt(guess);
      }
    }else if(eventKey === "Backspace" && letterAt > 0){
      document.querySelector(".txt" + (attempts+"") + ((letterAt-1)+"")).innerHTML = "";
      guess=guess.substring(0,guess.length-1);
      letterAt--;
    }else{
      console.log(eventKey);
      if(eventKey.trim().length == 1 && guess.length < LENGTH){
        guess += (eventKey);
        document.querySelector(".txt" + (attempts+"") + (letterAt+"")).innerHTML = eventKey;
        letterAt++;
      }
    }

  }
}
const makeAttempt = (guess) => {
  console.log(guess);
  for(let i = 0; i < LENGTH; i++){
    if(guess[i] == currWord[i]){
      document.querySelector(".cube" + (attempts+"") + (i+"")).className = ".cube" + (attempts+"") + (i+"") + " cube success";
    }
  }
}
newGame()
function newGame() {
    // var seed = "";
    // len = Math.floor(Math.random() * 40 + 20);
    // for (var i = 0; i < len; i++) {
    //     seed += String.fromCharCode(Math.floor(Math.random() * 100));
    // }
    //
    // var code = sha256(seed);

    setMyKeyDownListener();

}
