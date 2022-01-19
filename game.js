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
        this.player1 = new Player('Amelie', '🦉');
        this.player2 = new Player('Panda', '🐼');
        this.playersTurn = this.player1.token;
        this.gameboard = {A1: '', A2: '', A3: '', 
                          B1: '', B2: '', B3: '',
                          C1: '', C2: '', C3: ''};
    }

    changePlayersTurn(token) {
        if (token === this.player2.token) {
            this.playersTurn = this.player1.token;
        }
        if (token === this.player1.token) {
            this.playersTurn = this.player2.token;
        }
    }

    placeToken(token, placement) {
        if (token === this.playersTurn && placement) {
            if (this.gameboard[placement] === ''){
                this.gameboard[placement] = token;
                this.checkWinConditions(token);
                this.changePlayersTurn(token);
                console.log(`${token} placed in ${placement}`);
            } else {
                return ('This spot is taken. Please select a different spot.');
            }
        } else {
            return (`It's not ${token}'s turn!`);
        }
    } 

    checkCatGame() {
        if (this.gameboard.A1 != '' && this.gameboard.A2 != '' && this.gameboard.A3 != '' && 
        this.gameboard.B1 != '' && this.gameboard.B2 != '' && this.gameboard.B3 != '' && 
        this.gameboard.C1 != '' && this.gameboard.C2 != '' && this.gameboard.C3 != '') {
            console.log('It\'s a draw!😼')
        }
    }

    checkWinConditions(token) {
        this.checkCatGame();
        if (this.gameboard.A1 === token && this.gameboard.A2 === token && this.gameboard.A3 === token) {
            console.log(`${token} wins!`);
        } else if (this.gameboard.B1 === token && this.gameboard.B2 === token && this.gameboard.B3 === token) {
            console.log(`${token} wins!`);
        } else if (this.gameboard.C1 === token && this.gameboard.C2 === token && this.gameboard.C3 === token) {
            console.log(`${token} wins!`);
        } else if (this.gameboard.A1 === token && this.gameboard.B1 === token && this.gameboard.C1 === token) {
            console.log(`${token} wins!`);
        } else if (this.gameboard.A2 === token && this.gameboard.B2 === token && this.gameboard.C2 === token) {
            console.log(`${token} wins!`);
        } else if (this.gameboard.A3 === token && this.gameboard.B3 === token && this.gameboard.C3 === token) {
            console.log(`${token} wins!`);
        } else if (this.gameboard.A1 === token && this.gameboard.B2 === token && this.gameboard.C3 === token) {
            console.log(`${token} wins!`);
        } else if (this.gameboard.A3 === token && this.gameboard.B2 === token && this.gameboard.C1 === token) {
            console.log(`${token} wins!`);
        } else {
            console.log(`Sorry, ${token} is not a winner yet...`)
        }
    }

    resetGame() {
        this.gameboard = {A1: '', A2: '', A3: '', 
                          B1: '', B2: '', B3: '',
                          C1: '', C2: '', C3: ''};
        this.playersTurn = this.player1.token;
    }
}