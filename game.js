class Game {
    constructor() {
        this.player1 = new Player('Amelie', '🦉');
        this.player2 = new Player('Panda', '🐼');
        this.playersTurn = this.player1.token;
        this.gameboard = {A1: '', A2: '', A3: '', 
                          B1: '', B2: '', B3: '',
                          C1: '', C2: '', C3: ''};
        this.moves = 0;
        this.winBoolean = false;
    }

    changePlayersTurn(token) {
        if (token === this.player2.token) {
            this.playersTurn = this.player1.token;
        }
        if (token === this.player1.token) {
            this.playersTurn = this.player2.token;
        }
    }

    // chooseWinner() {
    //     ??? push win for X/O to array
    // }

    placeToken(token, placement) {
        if (token === this.playersTurn && placement ) {
            console.log('placeToken is running')
            // debugger
            if (this.gameboard[placement] === ''){
                console.log('first if of placeToken is running');
                // debugger;
                this.gameboard[placement] = token;
                console.log(`${this.checkWinConditions(token)}`)
                if(this.checkWinConditions(token) === `${token} wins!`) {
                    return
                };
                // this.changePlayersTurn(token);
                this.moves++;
                console.log(`${token} placed in ${placement}`);
                return `${token}`
            } else {
                return ('This spot is taken. Please select a different spot.');
            }
        } else {
            return (`It's not ${token}'s turn!`);
        }
    } 

    checkCatGame() {
        var catGame = false;
        if (this.moves >= 5){
            if (this.gameboard.A1 != '' && this.gameboard.A2 != '' && this.gameboard.A3 != '' && 
            this.gameboard.B1 != '' && this.gameboard.B2 != '' && this.gameboard.B3 != '' && 
            this.gameboard.C1 != '' && this.gameboard.C2 != '' && this.gameboard.C3 != '') {
                catGame = true;
            }
        }
        return catGame;
    } //return catGame; catGame is false, unless conditions for draw are met

    // checkRows(token) {
    //     if (this.gameboard.A1 === token && this.gameboard.A2 === token && this.gameboard.A3 === token) {
    //         console.log(`${token} wins!`);
    //         this.winBoolean = true;
    //         //add to winner's (X/O) array
    //     } else if (this.gameboard.B1 === token && this.gameboard.B2 === token && this.gameboard.B3 === token) {
    //         console.log(`${token} wins!`);
    //         this.winBoolean = true;
    //     } else if (this.gameboard.C1 === token && this.gameboard.C2 === token && this.gameboard.C3 === token) {
    //         this.winBoolean = true;
    //         console.log(`${token} wins!`);
    //     }
    // } //checks board rows for 

    // checkColumns(token) {
    //     if (this.gameboard.A1 === token && this.gameboard.B1 === token && this.gameboard.C1 === token) {
    //         console.log(`${token} wins!`);
    //         this.winBoolean = true;
    //     } else if (this.gameboard.A2 === token && this.gameboard.B2 === token && this.gameboard.C2 === token) {
    //         console.log(`${token} wins!`);
    //         this.winBoolean = true;
    //     } else if (this.gameboard.A3 === token && this.gameboard.B3 === token && this.gameboard.C3 === token) {
    //         console.log(`${token} wins!`);
    //         this.winBoolean = true;
    //     }
    // }

    // checkDiagonals(token) {
    //     if (this.gameboard.A1 === token && this.gameboard.B2 === token && this.gameboard.C3 === token) {
    //         console.log(`${token} wins!`);
    //         // this.winBoolean = true;
    //     }
    //     if (this.gameboard.A3 === token && this.gameboard.B2 === token && this.gameboard.C1 === token) {
    //         console.log(`${token} wins!`);
    //         // this.winBoolean = true;
    //     }
    // }

    checkWinConditions(token) {
        var catGame = this.checkCatGame()
        if (catGame === true){
            return 'cat game';
        }

        if (catGame === false && this.moves >= 5 ){
            console.log(`${token}large if else if block of checkWinConditions is running`)
            if (this.gameboard.A1 === this.playersTurn && this.playersTurn === token && this.playersTurn === token) {
                console.log('I see A1, A2, and A3 win!')
                return `${token} wins!`;
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
                console.log('final if of BIG block');
                return `CWCond didn't flag a winner ${token}`;
                // debugger;
                // console.log(`Sorry, ${token} is not a winner yet...`)
            }
        }
    }
    // checkWinConditions(token) {
    //     var catGame = this.checkCatGame()
    //     if (catGame === true){
    //         return 'cat game';
    //     }

    //     if (catGame === false && this.moves >= 5 ){
    //         this.checkRows(token);
    //         this.checkColumns(token);
    //         this.checkDiagonals(token);
    //         catGame = true;
    //         console.log('It\'s a draw game!!!')
    //     }

    //     if (this.winBoolean === true) {
    //         this.gameWinner = true;
    //         // return this.gameWinner;
    //     }
    // }
   
    resetGame() {
        this.gameboard = {A1: '', A2: '', A3: '', 
                          B1: '', B2: '', B3: '',
                          C1: '', C2: '', C3: ''};
        this.playersTurn = this.player1.token;
    }
}