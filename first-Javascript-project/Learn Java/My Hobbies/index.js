// Terminal based app to ask about user and their hobbies

var rs = require('readline-sync');
// App must Prompt to ask for a name
// App must prompt Fav hobby
// ask if there are more hobbies
// add hobbies to a list
//  store list of user hobbies
//  print user hobbies list at the end

var hobbies = [];
var moreHobbies = 0;
var areYouSure = false;

function getHobbyCount() {
  moreHobbies = rs.questionInt('How many other hobbies do you have? ');
}

function addHobbies(numHobbies){
  var counter = 0;
  while (counter < numHobbies) {
    var input = rs.prompt();
    hobbies.push(input);
    counter++;
    if (counter < numHobbies) {
      console.log('--Awesome! "'+input+'" is cool! What\'s the other '+(numHobbies - counter )+' ?');
    } else {
      console.log('I wish I could do '+ hobbies +' ... but I\'m not even real.');
    }
    
  }
}

var username = rs.question('What is your name? ');
var favHobby = rs.question('What is your favorite hobby? ')

hobbies.push(favHobby);
getHobbyCount();


if (moreHobbies > 0 ) {
  // for (let index = 0; index < moreHobbies; index++) {
  //   var otherHobby = rs.question('What is another hobby you have: ');
  //   hobbies.push(otherHobby);
  // }

  console.log('Cool What are they?');
  addHobbies(moreHobbies);
// add hobbies

}
else{
   areYouSure = rs.keyInYN('Are you sure that '+ hobbies + ' is all you like to do?');
}


if (!areYouSure && hobbies.length <=1 ) {
  getHobbyCount();
  console.log('Cool, what are they?');
  addHobbies(moreHobbies);
  
}else if (areYouSure){
  console.log(hobbies+' is cool, good for you!');
}
