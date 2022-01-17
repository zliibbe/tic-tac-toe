//global variable #######################################
var game = new Game;

//querySelectors ########################################
var gameboardGrid = document.querySelector('#gameboardGrid');
var actionMessage = document.querySelector('#actionMsg');
var playersTurnMessage = document.querySelector('#playersTurnMsg');
var playerOneWins = document.querySelector('#playerOneWins');
var playerTwoWins = document.querySelector('#playerTwoWins');

//data ##################################################
var player1wins = game.player1.wins;//blank array in data model
var player2wins  = game.player2.wins;//blank array  in data model

//eventListeners ########################################
gameboardGrid.addEventListener('click', showInGrid);

//functions #############################################
function show(element) {
    element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}

function changePlayersTurn() {
    game.changePlayersTurn(game.playersTurn);
}


function placeTokeninData(token, placementKey) {
    game.placeToken(token, placementKey)
}

function updateDOM(location) {
    location.innerText = game.playersTurn;
}

function checkCatGame () {
    if (game.checkWinConditions(game.playersTurn) === 'cat game') {
        hide(playersTurnMessage);
        actionMessage.innerText = 'It\'s a draw!'            
        show(actionMessage);
    }
}

function checkWin() {
    var whoWon = game.checkWinConditions(game.playersTurn)
    console.log(`${whoWon} ###checkWin### line 48`)
    if (whoWon === '🦉 wins!'){
        hide(playersTurnMessage);
        actionMessage.innerText = '🦉 Wins!'
        player1wins.push(1); 
        playerOneWins.innerText = `${player1wins.length} wins`           
        console.log('1 win added to 🦉\'s array')
        show(actionMessage); 
        game.resetGame;//reset data model
        resetGame()//reset DOM
    }
    if (whoWon === '🐼 wins!') {
        hide(playersTurnMessage);
        actionMessage.innerText = '🐼 Wins!'
        player2wins.push(1); 
        playerTwoWins.innerText = `${player2wins.length} wins`          
        console.log('1 win added to 🐼\'s array')
        show(actionMessage); 
        game.resetGame;//reset data model
        resetGame()//reset DOM
    }
}

function resetGame() {
    game.resetGame();//reset game data model
    gameboardGrid.innerHTML = '<div class="grid a1" id="A1"></div><div class="grid a2" id="A2"></div><div class="grid a3" id="A3"></div><div class="grid b1" id="B1"></div><div class="grid b2" id="B2"></div><div class="grid b3" id="B3"></div><div class="grid c1" id="C1"></div><div class="grid c2" id="C2"></div><div class="grid c3" id="C3"></div>' //reset DOM view
}

//order of operations
function showInGrid(e) {
    if (e.target.innerText === '') {
        var location = e.target;
        // console.log(location.id)
        placeTokeninData(game.playersTurn, location.id)
        updateDOM(location);
        game.changePlayersTurn(game.playersTurn);

        // changePlayersTurn(game.playersTurn);
        // placeTokeninData(game.playersTurn, e.target.id);
            // console.log(game.gameboard);

        playersTurnMessage.innerText = `It's ${game.playersTurn}'s turn.`;
        
        checkCatGame();
        
        // console.log(game.checkWinConditions())

        checkWin();
    }
}




