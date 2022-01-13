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
        this.player1 = new Player('X', '👾');
        this.player2 = new Player('O', '💩');
        // this.player2 = 'player 2';
        //what is the data for the game board?
        /*
        A1 A2 A3
        B1 B2 B3
        C1 C2 C3

        [X = true, O = false ??? === X] || 
        [X = 'X', O = 'O', null (for nothing in spot yet)]
        */  

        this.playersTurn = 'X';//default X starts first
        
    }

    //not in spec: but per spcot, manually key in turns(DOM manipulation therefore main.js)
    changePlayersTurn() {
        if (this.playersTurn === X) {
            this.playersTurn = O
        }

        if (this.playersTurn === O) {
            this.playersTurn = X
        }
    // }

    checkWinConditions() {
        //check gameboard for winCondtions
        //return true/false; if true run win method, else run turn

         /*
        if ROWS: (A1,A2,A3 === X) (B1,B2,B3 === X) (C1, C2, C3 === X)
           COLUMNS: (A1, B1, C1 === X)  (A2, B2, C2=== X)  (A3, B3, C3 === X)
           DIAGONALS: (A1, B2, C3 === X) (A3, B2, C1 === X) {
               X wins
           }

        if ROWS: (A1,A2,A3 === O) (B1,B2,B3 === O) (C1, C2, C3 === O)
           COLUMNS: (A1, B1, C1 === O)  (A2, B2, C2=== O)  (A3, B3, C3 === O)
           DIAGONALS: (A1, B2, C3 === O) (A3, B2, C1 === O)) {
               O wins
           }
        */
    }

    checkCatGame() {
        //check if conditions for CatGame are met
        //if yes, display 😼; else keep playing game
       
    }

    resetGame() {
        //clear all 9 divs of X or O

    }

}
// var playerOne = new Player('X', '👾')