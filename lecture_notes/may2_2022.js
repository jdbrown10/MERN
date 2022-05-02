//JS DOES SO MANY THINGS

//mongo -> we'll come back to this
//express -> node backend (basically like a flask server)
//react -> it's basically node but it displays in your browser
//node -> js used outside of the browser. it's still js, browser-specific things just don't work in node (like alert, etc)

//electron -> a way where you can make react applications but it works outside of the browser (like a desktop app)
//react native -> react as a phone app
//mongoDB -> js as a database

//js is an interpreted language (like python) (as opposed to compiling language like c#, java, c++, etc)
//in a compiled language, the entire program gets put together from front to back before it runs, and if there's an error, it will not compile
//in an interpreted language, it runs without checking for errors first, and then errors will just mess stuff up if they exist

//==========================

//destructuring

//destructuring an array -> order matters, but names don't
const faveGames = [
    "link to the past",
    "breath of the wild",
    "super smash bros ultimate",
    "slay the spire",
    "rocket league"
];

const [first,botw,,sts] = faveGames; //it's almost like the reverse syntax of a normal variable declaration. creates a constant called "first" that gets the value of the first item in the faveGames array. also creates a const called botw that takes the value of the second item in the faveGames array. the commas skip over the third item, and then a fourth constant is created called sts that gets the value of "slay the spire"


const faveGames2 = [
    "link to the past",
    "breath of the wild",
    "super smash bros ultimate",
    "slay the spire",
    "rocket league"
];

const[link2thepast,, ...others] = faveGames2; //creates a constant called link2thepast that will get the value "link to the past", skips the second one, and another array called "others" that contains everything else. the rest operator "..." has to be at the end when destructuring

let updatedList = ["barbie dreamhouse 2", ...faveGames]; //use the spread operator (...) to create a new array with the new item "barbie dreamhouse 2" plus all of the items from favegames. if you don't use the spread operator, it will nest the two arrays

//if it's left of the =, "..." is a rest operator ------- if it's to the right of the =, "..."' is a spread oprtator

//destructuring an object -> names matter, but order doesn't
const lttp = {
    name: "Legend of Zelda Link to the Past",
    company: "Nintendo",
    year: 1991,
    genre: "adventure"
}

const {genre, name, ...details} = lttp; // ""...details" will create one new object called "details" with the year and the company (everything else not included prior to it)
// console.log(genre); 

const island = {
    name: "Secret of Monkey Island 2",
    company: "LucasArts",
    ...details //these are the same details from lttp that we saved on line 50. need to use the 3 dots or it'll create a whole new object inside of this object, rather than just adding the keys that ...details contains
}

//==========================

//FUNCTIONS

//in javascript, functions are just variables that do things when you give them parameters

function doThing(message){
    console.log(message);
}


function repeater(times, action){
    for (let i = 0; i < times; i++) {
        action();
    }
}

repeater(10,function(){console.log("woooooahhh!!")}); //this function doesn't have a name -> it's an anonymous function and it only exists in this context.

////////////////
//fat arrow syntax:
//function() => {body of function}
////////////////

const arrowRepeater = (times, action) => {
    for (let i = 0; i < array.length; i++) {
        action();
    }
}

repeater(10,()=>{console.log("woooooahhhh!!!")});



//MAP
//it just returns something that is slightly altered

var someNums = [4, 8, 10];
console.log(someNums);
someNums = someNums.map((num)=>{return num*2});
console.log(someNums);

//FILTER