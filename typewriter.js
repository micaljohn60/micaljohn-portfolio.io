
const games = ["PUBG...", "Rainbow 6", "CSGO...","Apex Legend"];
let i = 0;
let timer;

function typingEffect() {
  let game = games[i].split("");
  var loopTyping = function() {
    if (game.length > 0) {
      document.getElementById('game').innerHTML += game.shift();
    } else {
      deletingEffect();
      return false;
    };
    timer = setTimeout(loopTyping, 200);
  };
  loopTyping();
};

function deletingEffect() {
  let game = games[i].split("");
  var loopDeleting = function() {
    if (game.length > 0) {
      game.pop();
      document.getElementById('game').innerHTML = game.join("");
    } else {
      if (games.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 90);
  };
  loopDeleting();
};

typingEffect();
