//global variable #######################################
var game = new Game;

//querySelectors ########################################
var gameboardGrid = document.querySelector('#gameboardGrid');

//data ##################################################
var player1wins = game.player1.wins;//blank array
var player2wins  = game.player2.wins;//blank array

//eventListeners ########################################
gameboardGrid.addEventListener('click', showInGrid);

//functions #############################################
//render functions
function show(element) {
    element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}

function showInGrid(e) {
    var location = e.target;
    location.innerText = game.playersTurn;
    game.placeToken(game.playersTurn, e.target.id);     
}




