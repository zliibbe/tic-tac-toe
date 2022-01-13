/*
game.js includes a Game class
A Game should include:
Two Player instances
A way to keep track of the data for the game board
A way to keep track of which players's turn it currently is
A way to check the Game's board data for win conditions
A way to detect when a game is a draw{Cat Game} (no one has won)
A way to reset the Game's board to begin a new game
*/

class Game {
    constructor() {
        //2x play instances

        //what is the data for the game board?

        this.playersTurn = A || B;
        
    }

    createPlayer() {

    }

    checkWinConditions() {
        //check gameboard for winCondtions
        //return true/false; if true run win method, else run turn
    }

    checkCatGame() {
        //check if conditions for CatGame are met
        //if yes, display 😼; else keep playing game
    }

    resetGame() {

    }
}