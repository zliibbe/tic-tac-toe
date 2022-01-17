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

// function changePlayersTurn() {
//     game.changePlayersTurn(game.playersTurn);
// }


// function placeTokeninData(token, placementKey) {
//     game.placeToken(token, placementKey)
// }

//click on ID, take ID name and use that as a calling in data Model
//e.target.id === 
//var x = e.target.id -- B2
function updateDOM(location) {//DOM should be be
    location.innerText = game.playersTurn;//DOM
                         game.gameboard.location//from data model
}

function checkCatGame () {
    if (game.checkWinConditions(game.playersTurn) === 'cat game') {
        hide(playersTurnMessage);
        actionMessage.innerText = 'It\'s a draw!'            
        show(actionMessage);
        triggerResetData();//create 3 sec pause?
        triggerResetDOM();
        show.playersTurnMessage;
    }
}

function checkWin() {
    //game.players
    game.checkWinConditions(game.playersTurn)
    var whoWon = game.checkWinConditions(game.playersTurn)
    console.log(game.checkWinConditions(game.playersTurn))
    if (whoWon === '🦉 wins!'){
        hide(playersTurnMessage);//hide who's turn it is on the DOM
        actionMessage.innerText = '🦉 Wins!' //DOM display
        player1wins.push(1); //update Data Model
        playerOneWins.innerText = `${player1wins.length} wins` //update DOM
        console.log('1 win added to 🦉\'s array')
         //update DOM
        show(playersTurnMessage);
        
        triggerResetData();//create 3 sec pause?
        triggerResetDOM();
        show(actionMessage);
       // game.resetGame;//reset data model
       // resetGame()//reset DOM

    }
    if (whoWon === '🐼 wins!') {
        hide(playersTurnMessage);
        actionMessage.innerText = '🐼 Wins!'
        player2wins.push(1); 
        playerTwoWins.innerText = `${player2wins.length} wins`          
        console.log('1 win added to 🐼\'s array')
        triggerResetData();//create 3 sec pause?
        triggerResetDOM();
        show(actionMessage);
        //game.resetGame;//reset data model
        //resetGame()//reset DOM
    }
}

function triggerResetData() {
    var resetDataModel = setTimeout(game.resetGame, 3000)
    return resetDataModel;
}

function triggerResetDOM() {
    var resetDOM = setTimeout(resetGame, 3000);
    // var resetDataModel = setTimeout(game.resetGame, 3000)
    // console.log('hello')
    return resetDOM;
}

function resetGame() {
    game.resetGame();//reset game data model
    gameboardGrid.innerHTML = '<div class="grid a1" id="A1"></div><div class="grid a2" id="A2"></div><div class="grid a3" id="A3"></div><div class="grid b1" id="B1"></div><div class="grid b2" id="B2"></div><div class="grid b3" id="B3"></div><div class="grid c1" id="C1"></div><div class="grid c2" id="C2"></div><div class="grid c3" id="C3"></div>' //reset DOM view
    hide(actionMessage);
}

//order of operations
function showInGrid(e) {
    if (e.target.innerText === '') {
        var location = e.target;
        // place token in datamodel
        game.placeToken(game.playersTurn, location.id);
        // place token on page (DOM)
        updateDOM(location);
        
        // changePlayersTurn(game.playersTurn);
        // placeTokeninData(game.playersTurn, e.target.id);
        // console.log(game.gameboard);
        
        checkCatGame();      
        
        checkWin();

        game.changePlayersTurn(game.playersTurn);
        playersTurnMessage.innerText = `It's ${game.playersTurn}'s turn.`;
    }
}



