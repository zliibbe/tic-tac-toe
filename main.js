//global variable #######################################
var player1 = new Player("Amelie", "🦉");
var player2 = new Player("Panda", "🐼");
var game = new Game(player1.token);

//querySelectors ########################################
var gameboardGrid = document.querySelector("#gameboardGrid");
var actionMessage = document.querySelector("#actionMsg");
var playersTurnMessage = document.querySelector("#playersTurnMsg");
var playerOneWins = document.querySelector("#playerOneWins");
var playerTwoWins = document.querySelector("#playerTwoWins");

//data ##################################################
var player1wins = player1.wins; //blank array in data model
var player2wins = player2.wins; //blank array  in data model

//eventListeners ########################################
gameboardGrid.addEventListener("click", showInGrid);

//functions #############################################
function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

// function changePlayersTurn() {
//     playegame.changePlayersTurn(game.playersTurn, player1, player2)r2;
// }

// function placeTokeninData(token, placementKey) {
//     game.placeToken(token, placementKey)
// }

//click on ID, take ID name and use that as a calling in data Model
//e.target.id ===

function updateDOM(location) {
  //DOM should be be
  location.innerText = game.playersTurn; //DOM
  game.gameboard.location; //from data model
}

function checkCatGame() {
  if (game.checkCatGame(player1, player2) === true) {
    hide(playersTurnMessage);
    actionMessage.innerText = "It's a draw!";
    show(actionMessage);
    triggerResetData(); //create 3 sec pause?
    triggerResetDOM();
    show.playersTurnMessage;
  }
}

function checkWin() {
  game.checkWinConditions(game.playersTurn, player1, player2);
  var whoWon = game.checkWinConditions(game.playersTurn, player1, player2);
  console.log(game.checkWinConditions(game.playersTurn, player1, player2));

  if (player1.hasWon === true) {
    hide(playersTurnMessage); //hide who's turn it is on the DOM
    actionMessage.innerText = "🦉 Wins!"; //DOM display
    player1wins.push(1); //update Data Model
    playerOneWins.innerText = `${player1wins.length} wins`; //update DOM
    console.log("1 win added to 🦉's array");
    //update DOM
    show(playersTurnMessage);

    triggerResetData();
    triggerResetDOM();
    show(actionMessage);
    // game.resetGame;//reset data model
    // resetGame()//reset DOM
  }
  if (player2.hasWon === true) {
    hide(playersTurnMessage);
    actionMessage.innerText = "🐼 Wins!";
    player2wins.push(1);
    playerTwoWins.innerText = `${player2wins.length} wins`;
    console.log("1 win added to 🐼's array");
    show(playersTurnMessage);
    triggerResetData();
    triggerResetDOM();
    show(actionMessage);
    //game.resetGame;//reset data model
    //resetGame()//reset DOM
  }
}

function triggerResetData() {
  var resetDataModel = setTimeout(game.resetGame(player1, player2), 2000);
  game.changePlayersTurn(game.playersTurn, player1, player2);
  return resetDataModel;
}

function triggerResetDOM() {
  var resetDOM = setTimeout(resetGame, 2000);
  // var resetDataModel = setTimeout(game.resetGame, 3000)
  // console.log('hello')
  return resetDOM;
  show(playersTurnMessage);
}

//delete this function
function resetGame() {
  // var newPlayerGoesFirst = playegame.changePlayersTurn(game.playersTurn, player1, player2)r2//do I need this for switching player's turn each round?
  game.resetGame(player1, player2); //reset game data model
  gameboardGrid.innerHTML =
    '<div class="grid a1" id="A1"></div><div class="grid a2" id="A2"></div><div class="grid a3" id="A3"></div><div class="grid b1" id="B1"></div><div class="grid b2" id="B2"></div><div class="grid b3" id="B3"></div><div class="grid c1" id="C1"></div><div class="grid c2" id="C2"></div><div class="grid c3" id="C3"></div>'; //reset DOM view
  hide(actionMessage);
  game.changePlayersTurn(game.playersTurn, player1, player2);
  playersTurnMessage.innerText = `It's ${game.playersTurn}'s turn.`;
  show(playersTurnMessage);
}

//order of operations
function showInGrid(e) {
  if (e.target.innerText === "") {
    var location = e.target;

    game.placeToken(game.playersTurn, location.id); // place token in datamodel

    updateDOM(location); // place token on page (DOM)

    // changePlayersTurn(game.playersTurn);
    // placeTokeninData(game.playersTurn, e.target.id);

    checkCatGame();

    checkWin();

    game.changePlayersTurn(game.playersTurn, player1, player2); //changes players turn (binary)
    playersTurnMessage.innerText = `It's ${game.playersTurn}'s turn.`;
  }
}
