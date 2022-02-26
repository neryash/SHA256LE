var guess = "";
var len;
var attempts = 0;

function setMyKeyDownListener() {
    window.addEventListener(
      "keydown",
      function(event) {handleKeydown(event.key)}
    )
}

function handleKeydown(eventKey) {
    if (eventKey == 13) { // In case of enter
        if (guess.length == len)
            makeAttempt(guess);
    }
    else
        guess += String.fromCharCode(eventKey);
}

function new_game() {
    var seed = "";
    len = Math.floor(Math.random() * 40 + 20);
    for (var i = 0; i < len; i++) {
        seed += String.fromCharCode(Math.floor(Math.random() * 100));
    }
  
    var code = sha256(seed);

    setMyKeyDownListener();
 
}
