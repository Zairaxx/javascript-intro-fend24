const NAME = "Brandon";
let age = 30;
let favoriteDestination = "Strömsund";
let siblings = 3;
let hasPets = true;


console.log("Hej, jag heter "  +  NAME + ". Jag är " + age + " år gammal. Jag tycker om att åka till " + favoriteDestination + ", med mina " + siblings + " syskon. Har jag husdjur? " + hasPets);
console.log(`Hej, jag heter ${NAME}. Jag är ${age} år gammal. Jag tycker om att åka till ${favoriteDestination}, med mina ${siblings} syskon. Har jag husdjur? ${hasPets}`)
let favoriteFruits = ["Banan", "Kiwi", "Ananas", "Mango", "Apelsin"];

favoriteFruits.push("Granatäpple");

// console.log(favoriteFruits[0],favoriteFruits[3]);

// console.log(favoriteFruits)

let favoriteMovies = ["Interstellar", "Fight Club", "Hangover 1", "Hangover 2", "Hangover 3", "Hangover 4", "Fast & Furious"];

favoriteMovies.pop();
console.log(favoriteMovies[favoriteMovies.length-1])
// console.log(favoriteMovies[favoriteMovies.length-2])

let myPet = {
    // key/property :value
   name: "Kobe",
   breed: "Golden retriever",
   type: "Dog",
   age: 8,
   isHerbivore: false,
   // Metod = En funktion inuti ett objekt
   talk: function() {
    console.log("Woof woof!")
   },
   bestFriend: {
    name: "Pluto",
    breed: "Chihuahua",
    type:"Dog",
    age: 4,
    isHerbivore:true
   }
}

myPet.talk()

// console.log("Age :" + myPet.age)

// console.log(myPet.bestFriend.name)


let myName = "Brandon";
let myAge = 47;
let favoriteSport = "Basket";

console.log(`Hej jag heter ${myName}, jag är ${myAge} år gammal. Min favoritsport är ${favoriteSport}`);


    //Funktioner/Metoder, Uttryck/Expressionss
