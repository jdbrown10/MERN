class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`This ninja is named ${this.name}`)
    }

    showStats(){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank some sake. +10 to health. Health is now ${this.health}`)
    }
}