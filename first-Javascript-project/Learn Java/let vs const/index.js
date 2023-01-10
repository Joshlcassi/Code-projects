// Let Vs Const

const id = 'xyz123';

let highFives = 23;
let isCool = false;

if (highFives > 5) {
  let isCool = true;
  console.log('Inside of the IF', isCool);
}

const person = {
  name: 'Joshua',
  age: 23,
}

person.age = 26;

console.log(person);
console.log(isCool);


