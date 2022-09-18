//Factory functions
// function createCircle(radius){
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     }
// }

// const circle1 = createCircle(1);
// console.log(circle1);

//Constructor Functions
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

//const circle = new Circle(12);
// console.log(circle);

//clone an object
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

// const another = {};

// for (let key in circle)
//     another[key] = circle[key];

//const another = Object.assign({}, circle);
const another = {...circle};


//template literals

const name = 'Jomiel';
const message = 
`Hi, ${name},

Thank you.

Regards,
Mohy moshy`;

//exercise
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

function Address(street, city, zipcode){
     this.street = street;
     this.city = city;
     this.zipcode = zipcode;
}

function areEqual(address1, address2){
    
    for(let key in address1){
        if(!(address1[key] === address2[key])){
            return false;
        }
    }
    return true;

}   

function areSame(address1, address2){
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));


let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 120,
    comments: [
        { author: 'a', body: 'b'},
        { author: 'c', body: 'd'}
    ],
    isLive: true
};

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}