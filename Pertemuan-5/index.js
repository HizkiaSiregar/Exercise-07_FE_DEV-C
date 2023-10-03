// Array

let student = ["Morgan", "lester", "Rolina"];
let number = [1, 2, 3, 4, 5];
let ms = ["Queenie", "Hyacinth", 123, true];

console.log(student);
console.log(number);
console.log(ms);
console.log(ms.length);

// array index (show pasitif var)
console.log(student[1]);
student[2] = "Arthur";
console.log(student);""

console.log(student[student.length - 1]);

// ToStrings
console.log(ms.toString());
console.log(ms.toString("#"));
console.log(ms.toString( ));

ms.pop();
console.log(ms);

ms.push("Deck the halls");
console.log(ms);

ms.shift();
console.log(ms);

ms.unshift();
console.log(ms);

// Array Object

const lily = {
    firstName : "Lisa",
    lastName : "Ngellen",
    age : 34,
    isMarried : true,
    grade : [60, 79, 100],
    address : {
        city : "Manado",
        prov : "Sulawesi Utara",
        code : "12345",
    },
    saysGreetings : function(){
        console.log("Hello world")
    },
}

// console.log(lily.grade[])

// Bracket Notation


programming.languages = programming.languages.map(function(language, index) {
    return index + " - " + language;
  });

console.log(programming.languages)