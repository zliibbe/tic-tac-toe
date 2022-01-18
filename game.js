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
            console.log('placeToken is running')
            // debugger
            if (this.gameboard[placement] === ''){
                console.log('first if of placeToken is running');
                // debugger;
                this.gameboard[placement] = token;
                this.moves++;
                console.log(`${token} placed in ${placement}`);
                // this.changePlayersTurn(token);
                return `${token}`;
            } else {
                return ('This spot is taken. Please select a different spot.');
            }
        } else {
            return (`It's not ${token}'s turn!`);
        }
    } 

    checkCatGame() {
        var catGame = false;
        
        if (this.moves === 9 && this.player1.hasWon === false && this.player2.hasWon === false){
                catGame = true;
            }
            return catGame;
        }
     //return catGame; catGame is false, unless conditions for draw are met

    checkWinConditions(token) {
        var catGame = false;
           if (this.player1.hasWon === false && this.player2.hasWon === false) {
        // if (catGame === false && this.moves >= 5 ){
            if (this.gameboard.A1 === token && this.gameboard.A2 === token && this.gameboard.A3 === token) {
                if (this.playersTurn === '🦉') {
                    this.player1.hasWon = true;
                    return `${token} wins!`;
                 }
                 if (this.playersTurn === '🐼') {
                    this.player2.hasWon = true;
                    return `${token} wins!`;
                 }
            } 
            if (this.gameboard.B1 === token && this.gameboard.B2 === token && this.gameboard.B3 === token) {
                if (this.playersTurn === '🦉') {
                    this.player1.hasWon = true;
                    return `${token} wins!`;
                 }
                 if (this.playersTurn === '🐼') {
                    this.player2.hasWon = true;
                    return `${token} wins!`;
                 }
            } 
            if (this.gameboard.C1 === token && this.gameboard.C2 === token && this.gameboard.C3 === token) {
                if (this.playersTurn === '🦉') {
                    this.player1.hasWon = true;
                    return `${token} wins!`;
                 }
                 if (this.playersTurn === '🐼') {
                    this.player2.hasWon = true;
                    return `${token} wins!`;
                 }
            } 
            if (this.gameboard.A1 === token && this.gameboard.B1 === token && this.gameboard.C1 === token) {
                if (this.playersTurn === '🦉') {
                    this.player1.hasWon = true;
                    return `${token} wins!`;
                 }
                 if (this.playersTurn === '🐼') {
                    this.player2.hasWon = true;
                    return `${token} wins!`;
                 }
            } 
            if (this.gameboard.A2 === token && this.gameboard.B2 === token && this.gameboard.C2 === token) {
                 if (this.playersTurn === '🦉') {
                    this.player1.hasWon = true;
                    return `${token} wins!`;
                 }
                 if (this.playersTurn === '🐼') {
                    this.player2.hasWon = true;
                    return `${token} wins!`;
                 }
            } 
            if (this.gameboard.A3 === token && this.gameboard.B3 === token && this.gameboard.C3 === token) {
                if (this.playersTurn === '🦉') {
                    this.player1.hasWon = true;
                    return `${token} wins!`;
                 }
                 if (this.playersTurn === '🐼') {
                    this.player2.hasWon = true;
                    return `${token} wins!`;
                 }
            } 
            if (this.gameboard.A1 === token && this.gameboard.B2 === token && this.gameboard.C3 === token) {
                if (this.playersTurn === '🦉') {
                    this.player1.hasWon = true;
                    return `${token} wins!`;
                 }
                 if (this.playersTurn === '🐼') {
                    this.player2.hasWon = true;
                    return `${token} wins!`;
                 }
            } 
            if (this.gameboard.A3 === token && this.gameboard.B2 === token && this.gameboard.C1 === token) {
                if (this.playersTurn === '🦉') {
                    this.player1.hasWon = true;
                    return `${token} wins!`;
                 }
                 if (this.playersTurn === '🐼') {
                    this.player2.hasWon = true;
                    return `${token} wins!`;
                 }
            } 
        }
        
        this.checkCatGame();
        if (catGame === true){
            return 'cat game';
        }
    }
    
    resetGame() {
        this.gameboard = {A1: '', A2: '', A3: '', 
                          B1: '', B2: '', B3: '',
                          C1: '', C2: '', C3: ''};
        this.changePlayersTurn(this.playersTurn);
        this.moves = 0;
        this.player1.hasWon = false;
        this.player2.hasWon = false;
    }

}