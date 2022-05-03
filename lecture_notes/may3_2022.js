//four pillars of OOP

//encapsulation
//abstraction

//inheritance
//polymorphism

//Inheritance
//there are general ideas of what a robot is: all robots have a battery, made of metal, an antenna, and can move. subcategories (children) of robots will all inherit these traits.

//Polymorphism
//there can be many different types of robots -> there can be a dog robot, a human robot, a cleaning robot. They all inherit the same general robot traits, but they also have traits that make them unique.

//Abstraction
//the processes that a robot completes might be VERY complicated under the hood, but we can just say it can Move and we know what that means (instead of showing the inner workings)
//move (10)
//recharge (1000)

//Encapsulation
//a complex process that has numerous steps can be condensed into a single term -- instead of saying "pick up foot, move it forward, put it back down, etc etc" we can just say "Walk", which is one work that captures the whole process
//move (paramater)
////do x
////do y
////do z

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

const sora = new Fighter("Sora", 3, 6, 5, "red");
const yoshi = new Fighter("Yoshi", 5, 5, 6, "green");

// console.log(sora);

yoshi.special(sora);