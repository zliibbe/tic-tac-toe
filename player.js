/*
A Game should include:
Two Player instances

must include constructor with properties:
id, token, wins */

class Player {
    constructor(name, token) {
        this.id = name //Date.now(); //or sting
        this.token = token;//emoji? 
        this.wins = [];
    }
}