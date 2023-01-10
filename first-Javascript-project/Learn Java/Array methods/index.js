// JavaScript Array Methods

// Array.filter() Method
var classroomA = {
  grade:'3rd Grade',
  students:[
    {name:'James', score:80},
    {name:'Ana', score:45},
    {name:'Josh', score:90},
    {name:'Lucas', score:95},
    {name:'Cassy', score:100},
    {name:'Mike', score:92},
  ]
};

var gradeAStudents = classroomA.students.filter(function(student){
  return student.score >=90;
});

console.log(gradeAStudents);



// Array.reduce() Method

var numbers = [2,5,7,1];
var sum = numbers.reduce(function(accumulator,currentValue){
  return accumulator + currentValue;
}, 0 );

console.log(sum);

var classroomB = {
  grade:'3rd Grade',
  students:[
    {name:'James', score:80},
    {name:'Ana', score:45},
    {name:'Josh', score:90},
    {name:'Lucas', score:95},
    {name:'Cassy', score:100},
    {name:'Mike', score:92},
  ]
};

var scoreTotal = classroomB.students.reduce(function(acc,val){
  return acc + val.score;
},0 );

classroomB.studentAverage = scoreTotal / classroomB.students.length;

console.log(scoreTotal);
console.log(classroomB);



// Array.map() method 
var classroomC = {
  grade:'3rd Grade',
  students:[
    {name:'James', score:80},
    {name:'Ana', score:45},
    {name:'Josh', score:90},
    {name:'Lucas', score:95},
    {name:'Cassy', score:100},
    {name:'Mike', score:92},
  ]
};

var helloStudents = classroomC.students.map(function(student,index,Array){

  return `Index ${index}: Hello ${student.name} 👋🏽`;

});

console.log(helloStudents);

// Array method chaining

var classroomD = {
  grade:'3rd Grade',
  students:[
    {name:'James', score:80},
    {name:'Ana', score:45},
    {name:'Josh', score:90},
    {name:'Lucas', score:95},
    {name:'Cassy', score:100},
    {name:'Mike', score:92},
  ]
};

var starStudents = classroomD.students
  .filter(function(student){
    return student.score >= 90;

  }).map(function(value){
    value.score += 5;
    return value;
  })
  .reduce(function(acc,val,index,Array){
    const total = acc.sum + val.score;
    return {
      sum:total,
      arr:Array,
    };
  },{sum:0, arr:[]});

  var studentAverages = starStudents.sum / starStudents.arr.length;



console.log(starStudents);
console.log(studentAverages);





