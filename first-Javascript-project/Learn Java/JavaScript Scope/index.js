// JavaScript Scope

// Scope determines the accessibility (visibility) of variables

//  Global - A global variable has global scope
//  All scripts and functions on a web page can access it.

var name = 'Anakin'
var user1 = {
  name:'Obi-Wan',
  age: 44,
  data: 'lightsabers and history',
}

console.log(name);

//  local - Variables declared within a function, become LOCAL to the function

function myFunc() {
  var name  = 'Yoda'
  console.log(name);
}

function userBDay(age){
  var newAge = age + 1;
  user1.age = newAge;
  console.log('Happy Birthday ' + user1.name+ ' your are '+ newAge + ' years old!');
}

myFunc();
userBDay(user1.age);
console.log(user1);


// ES2015 / ES6
//  Introduced 'let' & 'const':
//  These two keywords provide Block Scope variables (and constants) in javaScript

// Variables declared inside a block{} Cannot be accessed from outside the block


// let
var x = 10;
if (true) {
  var x = 2;
}

console.log(x);

let z = 10;
if (true) {
  let z = 2;
}

console.log(z);

let y = 10;
if (true) {
  y = 2;
}

console.log(y);


let gogo = 10;
if (true) {
  gogo = 2;
  if(true){
    gogo = 'hello'

    for (let index = 0; index < 4; index++) {
      gogo = index;
    }
  }
}

console.log(gogo);


// const
 const animal = 'dog';
// Const cannot be redefine and must be initiated with a value
 console.log(animal);


 const user2 = {
   name: 'Rambo',
   age: 73
 }

 function userBDay(age){
   newAge = age + 1;
  user2.age = newAge;
  console.log('Happy Birthday ' + user2.name+ ' your are '+ newAge + ' years old!');
}

userBDay(user2.age);
console.log(user2);

