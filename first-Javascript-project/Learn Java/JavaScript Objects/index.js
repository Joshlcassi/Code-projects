// JavaScript Objects

var person = {
  firstName: 'Josh',
  lastName: 'Cassi',
  age: 24,
  hobbies: ['gaming', 'sleeping','gym'],
  face:{
    eyeColor:'hazel',
    glasses:true,
  },
  greeting: function(){
    return 'My name is ' + this.firstName +' and I\'m '+ this.age+ ' years old.';
  }
}

console.log(person);
console.log(person.greeting());

var person2 = new Object();

person2.firstName = 'jose'
person2.lastName = 'marrra'
person2.age = 29
person2.greeting = function() {
  return 'My name is ' + this.firstName +' and I\'m '+ this.age+ ' years old.';
}

var person3 = {};

person3.firstName = 'jake'
person3.lastName = 'sossy'
person3.age = 29
person3.greeting = function() {
  return 'My name is ' + this.firstName +' and I\'m '+ this.age+ ' years old.';
}

function Person (name,age) {
  this.name = name;
  this.age = age;
  this.greeting = function(){
    return 'My name is ' + this.name +' and I\'m '+ this.age+ ' years old.';
  }
}


var humans = [];

humans.push(new Person('Jan',22));
humans.push(new Person('Jackson',21));
humans.push(new Person('Jango',24));
humans.push(new Person('Jay',23));


for (let index = 0; index < humans.length; index++) {
  var human = humans[index];
  console.log(human.greeting());
}


console.log(humans);
console.log(new Person('Julie',20));