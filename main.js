//global variable #######################################
var game = new Game;

//querySelectors ########################################
var gameboardGrid = document.querySelector('#gameboardGrid');
var actionMessage = document.querySelector('#actionMsg');
var playersTurnMessage = document.querySelector('#playersTurnMsg');
var playerOneWins = document.querySelector('#playerOneWins');
var playerTwoWins = document.querySelector('#playerTwoWins');

//eventListeners ########################################
gameboardGrid.addEventListener('click', orderOfOperationsOn);

//functions #############################################
function show(element) {
    element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}

function updateDOM(location) {
    location.innerText = game.playersTurn;
}

function checkDrawGame () {
    if (game.checkDrawGame() === true) {
        hide(playersTurnMessage);
        actionMessage.innerText = 'It\'s a draw!'            
        show(actionMessage);
        triggerResetDataModel();
        triggerResetDOM();
        show.playersTurnMessage;
    }
}

function checkWin() {
    game.checkWinConditions(game.playersTurn)
    if (game.player1.hasWon === true || game.player2.hasWon === true) {  
        
        hide(playersTurnMessage);    
        
        if (game.player1.hasWon === true){
            actionMessage.innerText = '🦉 Wins!';
            game.player1.wins.push(1);
            playerOneWins.innerText = `${game.player1.wins.length} wins`;
        }
        if (game.player2.hasWon === true) {    
            actionMessage.innerText = '🐼 Wins!';
            game.player2.wins.push(1); 
            playerTwoWins.innerText = `${game.player2.wins.length} wins`;
        }

        show(playersTurnMessage);
        triggerResetDataModel();
        triggerResetDOM();
        show(actionMessage);
    }      
}

function triggerResetDataModel() {
    var resetDataModel = setTimeout(game.resetGameData, 1500)
    return resetDataModel;
}

function triggerResetDOM() {
    var resetDOM = setTimeout(resetGameOnPage, 1500);
    return resetDOM;
}

function resetGameOnPage() {
    game.resetGameData();
    gameboardGrid.innerHTML = '<div class="grid a1" id="A1"></div><div class="grid a2" id="A2"></div><div class="grid a3" id="A3"></div><div class="grid b1" id="B1"></div><div class="grid b2" id="B2"></div><div class="grid b3" id="B3"></div><div class="grid c1" id="C1"></div><div class="grid c2" id="C2"></div><div class="grid c3" id="C3"></div>'
    hide(actionMessage);
    game.changePlayersTurn(game.playersTurn);
    playersTurnMessage.innerText = `It's ${game.playersTurn}'s turn.`;
    show(playersTurnMessage);
}

function orderOfOperationsOn(e) {
    if (e.target.innerText === '') {        
        game.placeToken(game.playersTurn, e.target.id);
        updateDOM(e.target);
        checkDrawGame();      
        checkWin();
        game.changePlayersTurn(game.playersTurn);
        playersTurnMessage.innerText = `It's ${game.playersTurn}'s turn.`;
    }
}



