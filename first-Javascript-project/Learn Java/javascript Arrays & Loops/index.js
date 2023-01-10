// JavaSCript Arrays & Loops

var tvShows = ['The Witcher', 'Naruto','One Piece'];

var userSavedMovies=[];

userSavedMovies.push('Fast & Furious');
userSavedMovies.push('The Matrix');
userSavedMovies.push('Transformers');

userSavedMovies.pop();

for(var i=0; i < tvShows.length; i++){
  console.log(tvShows[i]);
}

console.log(tvShows[2]);
console.log(userSavedMovies.length);


var completedItems=[];

var toDos = [
  {title:'Item 1', completed:true},
  {title:'Item 2', completed:false},
  {title:'Item 3', completed:false},
  {title:'Item 4', completed:true}
];

for(var x = 0; x<toDos.length;x++)
{
  if (toDos[x].completed) {
    completedItems.push(toDos[x]);
    
  }
}

var bottles = 99;
while(bottles>0){
  if(bottles !== 1){
    console.log(bottles+ ' bottles of stuff on the wall!')
  }
  console.log(bottles+ ' bottle of stuff on the wall!')
  bottles-=1;
}

console.log(toDos);
console.log(completedItems);



