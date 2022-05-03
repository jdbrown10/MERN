//Class representation of Super Smash Brothers

class Fighter{
    constructor(name, weight, strength, speed, color, playerNumber){
        //name, weight, percentage, strength, speed, color, playerNumber
        this.name = name;
        this.weight = weight;
        this.strength = strength;
        this.speed = speed;
        this.color = color;
        this.playerNumber = playerNumber;
        this.percentage = 0; //rather than taking a value from the parameter, every fighter starts at 0
    }

    attack(opponent){
        if (opponent instanceof Fighter) { //make sure the opponent is a Fighter before doing anything
            opponent.percentage += this.strength;
            console.log('${this.name} attacked ${opponent.name} and dealt ${this.strength} percent damage') //gotta use backticks to use variables inside the string!
        }
    }
    special(opponent){
        if (opponent instanceof Fighter) {
            opponent.percentage += this.strength * this.weight;
            console.log(`${this.name} attacked ${opponent.name} with a special attack and dealt ${this.strength * this.weight} percent damage`)
        }
    }
}



module.exports = Fighter;