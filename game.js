class Game {
  constructor(token) {
    this.playersTurn = token;
    this.gameboard = {
      A1: "",
      A2: "",
      A3: "",
      B1: "",
      B2: "",
      B3: "",
      C1: "",
      C2: "",
      C3: "",
    };
    this.moves = 0;
  }

  changePlayersTurn(token, player1, player2) {
    if (token === player2.token) {
      this.playersTurn = player1.token;
    }
    if (token === player1.token) {
      this.playersTurn = player2.token;
    }
  }

  placeToken(token, placement) {
    if (token === this.playersTurn && placement) {
      console.log("placeToken is running");
      // debugger
      if (this.gameboard[placement] === "") {
        console.log("first if of placeToken is running");
        // debugger;
        this.gameboard[placement] = token;
        this.moves++;
        console.log(`${token} placed in ${placement}`);
        // this.changePlayersTurn(token);
        return `${token}`;
      } else {
        return "This spot is taken. Please select a different spot.";
      }
    } else {
      return `It's not ${token}'s turn!`;
    }
  }

  checkCatGame(player1, player2) {
    var catGame = false;

    if (
      this.moves === 9 &&
      player1.hasWon === false &&
      player2.hasWon === false
    ) {
      catGame = true;
    }
    return catGame;
  }
  //return catGame; catGame is false, unless conditions for draw are met

  checkWinConditions(token, player1, player2) {
    var catGame = false;
    if (player1.hasWon === false && player2.hasWon === false) {
      // if (catGame === false && this.moves >= 5 ){
      if (
        this.gameboard.A1 === token &&
        this.gameboard.A2 === token &&
        this.gameboard.A3 === token
      ) {
        if (this.playersTurn === "🦉") {
          player1.hasWon = true;
          return `${token} wins!`;
        }
        if (this.playersTurn === "🐼") {
          player2.hasWon = true;
          return `${token} wins!`;
        }
      }
      if (
        this.gameboard.B1 === token &&
        this.gameboard.B2 === token &&
        this.gameboard.B3 === token
      ) {
        if (this.playersTurn === "🦉") {
          player1.hasWon = true;
          return `${token} wins!`;
        }
        if (this.playersTurn === "🐼") {
          player2.hasWon = true;
          return `${token} wins!`;
        }
      }
      if (
        this.gameboard.C1 === token &&
        this.gameboard.C2 === token &&
        this.gameboard.C3 === token
      ) {
        if (this.playersTurn === "🦉") {
          player1.hasWon = true;
          return `${token} wins!`;
        }
        if (this.playersTurn === "🐼") {
          player2.hasWon = true;
          return `${token} wins!`;
        }
      }
      if (
        this.gameboard.A1 === token &&
        this.gameboard.B1 === token &&
        this.gameboard.C1 === token
      ) {
        if (this.playersTurn === "🦉") {
          player1.hasWon = true;
          return `${token} wins!`;
        }
        if (this.playersTurn === "🐼") {
          player2.hasWon = true;
          return `${token} wins!`;
        }
      }
      if (
        this.gameboard.A2 === token &&
        this.gameboard.B2 === token &&
        this.gameboard.C2 === token
      ) {
        if (this.playersTurn === "🦉") {
          player1.hasWon = true;
          return `${token} wins!`;
        }
        if (this.playersTurn === "🐼") {
          player2.hasWon = true;
          return `${token} wins!`;
        }
      }
      if (
        this.gameboard.A3 === token &&
        this.gameboard.B3 === token &&
        this.gameboard.C3 === token
      ) {
        if (this.playersTurn === "🦉") {
          player1.hasWon = true;
          return `${token} wins!`;
        }
        if (this.playersTurn === "🐼") {
          player2.hasWon = true;
          return `${token} wins!`;
        }
      }
      if (
        this.gameboard.A1 === token &&
        this.gameboard.B2 === token &&
        this.gameboard.C3 === token
      ) {
        if (this.playersTurn === "🦉") {
          player1.hasWon = true;
          return `${token} wins!`;
        }
        if (this.playersTurn === "🐼") {
          player2.hasWon = true;
          return `${token} wins!`;
        }
      }
      if (
        this.gameboard.A3 === token &&
        this.gameboard.B2 === token &&
        this.gameboard.C1 === token
      ) {
        if (this.playersTurn === "🦉") {
          player1.hasWon = true;
          return `${token} wins!`;
        }
        if (this.playersTurn === "🐼") {
          player2.hasWon = true;
          return `${token} wins!`;
        }
      }
    }

    this.checkCatGame();
    if (catGame === true) {
      return "cat game";
    }
  }

  resetGame(player1, player2) {
    this.gameboard = {
      A1: "",
      A2: "",
      A3: "",
      B1: "",
      B2: "",
      B3: "",
      C1: "",
      C2: "",
      C3: "",
    };
    // this.changePlayersTurn(this.playersTurn);
    this.moves = 0;
    // console.log(player1.hasWon, player2.hasWon)
    player1.resetPlayer();
    player2.resetPlayer();
  }
}
