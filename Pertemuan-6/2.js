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

console.log(output)