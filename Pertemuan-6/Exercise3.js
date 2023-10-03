// Name : Siregar, Hizkia
// Desc : Exercise 3
// Date : 30 August 2023

// ARRAY EXERCISE
let people = ["Greg", "Mary", "Devon", "James"];

for (i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.forEach(function(data){
    console.log(data);
})

people.shift();
people.pop();
people.unshift("Matt");
people.push("Hizkia");

for (i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

let noMName = people.slice(1 ,3);

people.splice(2, 1, " Elizabeth", "Artie")

let withBob = people.concat("Bob")

// Print Array
console.log(people)
console.log(withBob)

// OBJECT EXERCISE
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("GO");

programming.difficulty = 7;

delete programming.jokes;

programming.isFun = true;

let output = programming.languages.map(function(languages, index) {
    return index + " - " + languages;
})

// Print Object
console.log(output)