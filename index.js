//variables | objects
let person = {
    name: "Jomiel",
    age: 26
}
person.name = "Jomiel Andrade";
person['age'] = 12;
console.log(person);

//variables | arrays
let selectedColors = ["green","blue"];
selectedColors[selectedColors.length] = "red";
selectedColors[selectedColors.length] = "orange";
selectedColors[selectedColors.length] = "pink";
console.log(selectedColors);

//functions
function greet(name){
    console.log("Hello "+name);
}

greet(person.name);

function square(number){
    return number * number;
}

console.log(square(person.age));

//Arithmetic
let x = 1;
x += 10
console.log(x);

//ternary
let points = 12;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//logical non boolean
let userColor = undefined;
let defaultColor = 'blue';
console.log(userColor || defaultColor);

//bitwise operator
console.log('bitwise');
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | writePermission;
let message = (myPermission & writePermission) ? 'yes' : 'no';
console.log(message);
