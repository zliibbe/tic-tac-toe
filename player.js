/*
must include constructor with properties:
id, token, wins */

class Player {
    constructor(token) {
        this.id = Date.now();
        this.token = token;//emoji? 
        this.wins = [];
    }
}