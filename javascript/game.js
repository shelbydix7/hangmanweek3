var getQuestions = [
  { question: "When was the Rick and Morty pilot aired?", answer: "December 2nd, 2013" },
  { question: "What is a 'schmeckle'?", answer: "A currency" },
  { question: "What are the ‘Ball Fondlerz’?", answer: "Rick and Morty's favorite show" },
  { question: "What is the name of Morty's highschool?", answer: "Harry Hempson" },
  { question: "What animal does Rick use for Morty's love potion?", answer: "A vole" },
  { question: "What is the dimension of Real Rick?", answer: "C-137" },
  { question: "What is the vampire gym teacher's name?", answer: "Coach Feratu" },
  { question: "What cereal do the Smith's eat?", answer: "Strawberry Smiggles" },
  { question: "What is Jerry's favorite movie?", answer: "The Titanic" },
  { question: "What is Beth's job?", answer: "Horse surgeon" },

];

var guessRemaining = 0;
var guesses = [];
var correctGuesses = [];
var wrongGuesses = [];
var currentQuestion;
var display = [];
var score = 0;


var ask = document.getElementById("ask");
var section = document.getElementById("section");
var total = document.getElementById("total");


// create functions...


function startUp() {
  return getQuestions[Math.floor(Math.random() * getQuestions.length)];

}

function restart() {
  guessRemaining = 7;
  guesses = [];
  currentQuestion = startUp();
  console.log(currentQuestion);
  score = 0;
  ask.textContent = currentQuestion.question;
  for (var i = 0; i < currentQuestion.answer.length; i++) {
    if (currentQuestion.answer[i] !== " ") {
      display.push("_")
    }
    else {
      display.push("\xa0")
    }
  }
  section.textContent = display.join(" ");
}


document.onkeyup = function (event) {
  var userGuess = event.key.toLowerCase();
  var answer = currentQuestion.answer.toLowerCase();
  for (var i = 0; i < answer.length; i++) {
    if (answer[i] === userGuess) {
      display[i] = userGuess;
      section.textContent = display.join(" ");
    }
  }
  guesses.push(userGuess);
  guessRemaining--;
}




restart();




