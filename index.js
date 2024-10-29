// Variable
// let age = 30;
// const age2 = 60;

// Datatyper
//Strings
let myName = "Brandon";
const school = 'Nackademin';

// Nedanstående rader kommer att ge oss ett error - Vi kan inte ge en konstant (const) ett nytt värde.
// school = "Ankademin"; 
// console.log(school);

//Numbers
let age = 30;
let price = 19.99;

//Booleans
let isWinter = false;
let isStudent = true;


// Exempel på ett uttryck dvs ett påstående som returnerar en boolean;
// Detta skriver ut false i konsolen.
// console.log("Är 3+3 = 5?",  3+3 === 5);

// Null & Undefined

//Deklarerar en variabel
 let finnsInte;

//Array - List of values

let myNumbers = [1,2,3,4,5,6,7,8,9,10]
let myClassmates = ["Daniel", "Kamyab", "Båmi"];

//Can include any type of values, arrays or objects
let randomArray = [11256346, "Brandon", false, null, [0,1,2], {test: "Hello"} ]
// console.log(randomArray.length);

//Assigning new value to index 1
randomArray[1] = "Brandom";

// console.log(randomArray);
//Objekt

let myObject = {
    //key:value
    name: "Ofelia",
    age: 22
}

// console.log("Hej, mitt namn är " + myObject.name + " och jag är " + myObject.age + " år gammal.")

//Funktion - Ett recept med kodblock som vi kan köra när som helst

//Exempel på två funktioner med input (parameter) och output (return).

function greeting(name){
    return "Hello " + name;
}

function addTwo(num){
    return num+2;
}


//Vi kan spara output från en funktion
let x = addTwo(10);

let greetMe = greeting("Brandon");

//Eller så kan vi skriva ut output i konsolen.
// console.log(addTwo(25));


// If/else

//En funktion med olika outputs baserat på input.

function isOver18(age){
    //Om du är över 18, returnera en sträng som skriver "Välkommen in!"
    //age >= 18 är exempel på en jämförelse (comparison). Här kolllar vi om åldern är större eller lika med 18.
    if (age >= 18) {
        return "Välkommen in";
    } else {
        return "Kom tillbaks när du är vuxen!";
    }
}

console.log(isOver18(18));