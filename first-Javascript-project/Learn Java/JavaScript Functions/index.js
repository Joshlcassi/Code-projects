// JavaSCript Functions

var warrior = {
  name: 'boi',
  attack: 70,
  defense: 60,
  mana: 100
}
console.log(warrior);

function levelUp(prop,val){
  warrior[prop]+=val;
}

levelUp('attack',2);
levelUp('defense',10);
levelUp('mana',20);

console.log('Stats after level up for player '+warrior);







function f2C(fare){

  var temp = (5/9) * (fare - 32)

  return temp.toFixed(2);
}
var cel = f2C(55);
var weather = 'the temperature outside is '+cel+' celcius';

console.log(weather);


function calcArea(wideboi, tallboi){

  return wideboi * tallboi
}

var kitchenArea = calcArea(15,18);
var bedroomArea = calcArea(12,10);

console.log(kitchenArea);
console.log(bedroomArea);