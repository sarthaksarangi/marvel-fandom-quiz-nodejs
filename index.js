var readlineSync = require("readline-sync");
var score = 0;
var highScores = [
  {
    name: 'Sarthak',
    score:5
  },
  {
    name:'Rohan',
    score:4
  }
]
function welcome(){
  var name = readlineSync.question('Hello please enter your name: ')
  console.log('Welcome! '+name +' to the MARVEL FANDOM QUIZ ');
  
}
var questions = [
  {
    question:'What is the real name of Captain America ? ',
    answer:'Steve Rogers'
  },{
    question:'What is the real name of Iron Man ? ',
    answer:'Tony Stark'
  },
  {
    question:'How many Captain America Movies have been made so far ? ',
    answer:'3'
  },{
    question:'Who is the Strongest Avenger ',
    answer:'Thor'
  },
{
    question:'Who is the most loved villian ? ',
    answer:'Loki'
  }
]

function play(question,answer){
  var userans = readlineSync.question(question)
  if(userans.toLowerCase() == answer.toLowerCase()){
    console.log('Correct! ')
    score++;
  }
  else{
    console.log('Wrong! ')
  }
  console.log('Current Score : ',score);
  console.log('---------------')
  
}


function game(){
  for(var i = 0; i<questions.length;i++){
    var currquestion = questions[i];
    play(currquestion.question,currquestion.answer)
  }
}


function showscores(){
  console.log("YAY! You SCORED: ", score);

  console.log('Check out the high scores');

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome()
game()
showscores()
