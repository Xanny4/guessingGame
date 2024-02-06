import { makeObservable, observable, computed, action, autorun } from "mobx";
const letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"
    , "r", "s", "t", "u", "v", "w", "x", "y", "z"];
export class Game {
    players = [];
    word = "";
    shownWord = "";
    tempLetterBank = []
    wordBank = [
        "summoner",
        "champion",
        "nexus",
        "rift",
        "pentakill",
        "baron",
        "dragon",
        "turret",
        "jungle",
        "gank",
        "ultimate",
        "laning",
        "minions",
        "ward",
        "cooldown"
    ]
    gameStarted = false;
    constructor() {
        makeObservable(this, {
            players: observable,
            shownWord: observable,
            gameStarted: observable,
            addPlayer: action,
            deletePlayer: action,
            generateWord: action,
            guessLetter: action,
        });
    }

    addPlayer(name, picturePath) {
        this.players.push({
            name: name,
            picturePath, picturePath,
            points: 0
        })
        console.log(this.players);
    }
    deletePlayer(i) {
        this.players.splice(i, 1);
    }
    generateWord() {
        //reset players points
        this.players.forEach(p => {
            p.points = 0;
        })

        this.tempLetterBank = [...letterBank];
        this.word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
        this.shownWord = "";
        for (let i = 0; i < this.word.length; i++) {
            this.shownWord += "*";
        }
        this.gameStarted = true;
    }
    guessLetter() {
        this.players.forEach(player => {
            let letter = this.tempLetterBank[Math.floor(Math.random() * this.tempLetterBank.length)]
            if (this.word.includes(letter)) {
                let newShownWord = "";
                for (let i = 0; i < this.word.length; i++) {
                    if (this.word.split("")[i] == letter)
                        newShownWord += letter;
                    else
                        newShownWord += this.shownWord[i];
                }
                this.shownWord = newShownWord;
                player.points++;
            }
            this.tempLetterBank.splice(this.tempLetterBank.indexOf(letter), 1);
            if (!(this.shownWord.includes("*"))) {
                this.gameStarted = false;
                let winner = this.players[0];
                for (let i = 1; i < this.players.length; i++) {
                    if (this.players[i].points > winner.points)
                        winner = this.players[i];
                }

                alert(winner.name + " Has won, with " + winner.points + " points!");
                return;
            }
        });

    }

}