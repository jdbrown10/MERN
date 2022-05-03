const Fighter = require("./fighter") //importing the Fighter class

// const sora = new Fighter("Sora", 3, 6, 5, "red");
// const yoshi = new Fighter("Yoshi", 5, 5, 6, "green");

// console.log(sora);
// console.log("this is the characters file");
// yoshi.special(sora);

//inheriting the fighter class! Samus will have all of those fighter attributes, plus some extra stuff
// "class ChildClass extends ParentClass"
class Samus extends Fighter{
    constructor(){
        super("Samus", 7, 7, 3, "yellow"); //reference to parent class with all those attributes
        this.charged = false; //unique attribute for Samus
    }

    special(opponent){
        if(opponent instanceof Fighter){
            if(this.charged){
                //fire the laser and uncharged
            }
            else{
                //charge the laser
            }
        }
    }
}