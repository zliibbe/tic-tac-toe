class Game {
    constructor() {
        this.player1 = new Player('Amelie', '🦉');
        this.player2 = new Player('Panda', '🐼');
        this.playersTurn = this.player1.token;
        this.gameboard = {A1: '', A2: '', A3: '', 
                          B1: '', B2: '', B3: '',
                          C1: '', C2: '', C3: ''};
        this.moves = 0;
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
        if (token === this.playersTurn && placement ) {
    
            if (this.gameboard[placement] === ''){
                this.gameboard[placement] = token;
                this.moves++;
                return `${token}`;
            } 
        } 
    } 

    checkDrawGame() {
        var drawGame = false;
        
        if (this.moves === 9 && this.player1.hasWon === false && this.player2.hasWon === false){
                drawGame = true;
            }
            return drawGame;
        }

    determineWhoHasWon(token) {
        if (this.playersTurn === '🦉') {
            this.player1.hasWon = true;
            return `${token} wins!`;
        }
        if (this.playersTurn === '🐼') {
            this.player2.hasWon = true;
            return `${token} wins!`;
        }
    }

    checkWinConditions(token) {
           if (this.player1.hasWon === false && this.player2.hasWon === false) {
                if (this.gameboard.A1 === token && this.gameboard.A2 === token && this.gameboard.A3 === token) {
                    this.determineWhoHasWon(token);
                } 
                if (this.gameboard.B1 === token && this.gameboard.B2 === token && this.gameboard.B3 === token) {
                    this.determineWhoHasWon(token);
                } 
                if (this.gameboard.C1 === token && this.gameboard.C2 === token && this.gameboard.C3 === token) {
                    this.determineWhoHasWon(token);
                } 
                if (this.gameboard.A1 === token && this.gameboard.B1 === token && this.gameboard.C1 === token) {
                    this.determineWhoHasWon(token);
                } 
                if (this.gameboard.A2 === token && this.gameboard.B2 === token && this.gameboard.C2 === token) {
                    this.determineWhoHasWon(token);
                } 
                if (this.gameboard.A3 === token && this.gameboard.B3 === token && this.gameboard.C3 === token) {
                    this.determineWhoHasWon(token);
                } 
                if (this.gameboard.A1 === token && this.gameboard.B2 === token && this.gameboard.C3 === token) {
                    this.determineWhoHasWon(token);
                } 
                if (this.gameboard.A3 === token && this.gameboard.B2 === token && this.gameboard.C1 === token) {
                    this.determineWhoHasWon(token);
                } 
        }
    }
    
    resetGameData() {
        this.gameboard = {A1: '', A2: '', A3: '', 
                          B1: '', B2: '', B3: '',
                          C1: '', C2: '', C3: ''};
        this.changePlayersTurn(this.playersTurn);
        this.moves = 0;
        this.player1.hasWon = false;
        this.player2.hasWon = false;
    }

}