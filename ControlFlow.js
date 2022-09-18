//if else
let hour = 20;

if(hour >= 6 && hour < 12)
    console.log('Good Morning!');
else if(hour >=12 && hour < 18)
    console.log('Good Afternoon!');
else
    console.log('Good Evening!');


//switch case
let role = 'moderator';

switch (role) {
    case 'guest':
        console.log('guest user');
        break;
    case 'moderator':
        console.log('moderator user');
        break;
    default:
        console.log('unknown user');
        break;
}

//loops
for (let i = 5; i >= 1; i--) {
    if(i % 2 !== 0) console.log(i);
}

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i); 
//     i++;
// }


// let x = 0;
// do {
//     if (x % 2 !== 0) console.log(x); 
//     x++
// } while (x <= 5);

//for in
const person = {
    name: 'Jomiel',
    age: 26
};

for (let key in person)
    console.log(key, person[key]);


//for of
const colors = ['blue', 'red', 'green'];

for (let color of colors) 
    console.log(color);

//exercises
function MaxOfTwoNumber(num1, num2){
    return num1 > num2 ? num1 : num2;
}

console.log(MaxOfTwoNumber(4,2));


function isLandscape(width, height){
    return width > height;
}

console.log(isLandscape(10, 2));


function fizzBuzz(input){
    let result;

    if(typeof input !== 'number') result = 'Not a number';
    else if((input % 3 !== 0) && (input % 5 !== 0)) result = input;
    else {
        if(input % 3 === 0) result = 'Fizz';
        if(input % 5 === 0) result = 'Buzz';
        if((input % 3 === 0) && (input % 5 === 0)) result = 'FizzBuzz';
    }
    
    return result;
}

console.log(fizzBuzz(15));


function checkSpeed(speed){

    const speedLimit = 70;
    const kmPerPoint = 5

    if(speed < speedLimit + kmPerPoint)
        return 'Ok';
    else {
        let points = (speed - speedLimit) / kmPerPoint;
        if(points >= 12) return 'License Suspended';
        else return 'Point: ' + Math.floor(points);
    }
}

console.log(checkSpeed(69));


showStars(2);
function showStars(rows){
    for(let row = 1; row <= rows; row++){
        let pattern = '';
        for(let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

console.log(isPrime(4));
function isPrime(number){
    for(let factor = 2; factor < number; factor++){
        if(number % factor === 0)
        return false;
    }
    return true;
}