// Logical operators
// && and
// || or
//  ! not

var skater1 = 9.5;
var skater2 = 9.0;
var skater3 = 8.5;

if (skater1 > skater2 && skater2 <= skater1){

  console.log('Move skater to next round')

}else if(skater3<skater2 || skater3 === skater2){

  console.log('Skater3 is stepping up!');
}