var readLineSync = require('readline-sync')
const chalk = require('chalk');

var user = readLineSync.question('Enter your name:');
console.log('Welcome '+ user + '. \n'  );


function play(question, answer){
  var ans = readLineSync.question('\n' + question);
  if(ans.toLowerCase() == answer.toLowerCase()){
    console.log('correct answer!!');
    score = score + 1;
  }
  else{
    console.log('wrong answer!!');
  }
  console.log('your score : '+ score);
}
var score = 0;

question1 = {
  q : 'Where do I live?',
  a : 'kolhapur'
}

question2 = {
  q : 'which is my favourite movie?',
  a : 'pk'
}

question3 = {
  q : 'who is my favourite actor?',
  a : 'amir khan'
}

question4 = {
  q : 'what is my favourite sport ?',
  a : 'cricket'
}

question5 = {
  q : 'which is my favourite dish in sweet ?',
  a : 'gulab jamun'
}

var questionsArray = [question1,question2,question3,question4,question5];

for(var i=0;i<questionsArray.length;i++){
  play(questionsArray[i].q , questionsArray[i].a);
}
console.log('\n\n Game Ended ');
console.log("Final score = "+ score );

if(score <=2){
  console.log('You know very less about me !!!');
}
else if(score == 5){
  console.log('You know me perfectly');
}
else{
  console.log('you know me well');
}
