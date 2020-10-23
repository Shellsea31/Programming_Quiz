// target the necessary elements
let beginBtn = document.querySelector("#begin");
let number1 = document.querySelector("#text1");
let jumbo = document.querySelector(".jumbotron");
let quizQuestion = document.querySelector("#text2");
let timer = document.querySelector("#timer");

///////////////////////////////////////////////////////////////
// styled groups and buttons
// create a div with bootstrap properties that make buttons vertical
let btnGroup = document.createElement("div");
btnGroup.setAttribute("class", "btn-group-vertical");
// create buttons and give them bootstrap style
let option1 = document.createElement("button");
option1.setAttribute("type", "submit");
option1.setAttribute("class", "btn-sm btn-info");
let option2 = document.createElement("button");
option2.setAttribute("type", "submit");
option2.setAttribute("class", "btn-sm btn-info");
let option3 = document.createElement("button");
option3.setAttribute("type", "submit");
option3.setAttribute("class", "btn-sm btn-info");
let option4 = document.createElement("button");
option4.setAttribute("type", "submit");
option4.setAttribute("class", "btn-sm btn-info");
let initials = document.createElement("form");
initials.setAttribute("id", "inputForm");
let userInput = document.createElement("input");
userInput.setAttribute("type", "text");
userInput.setAttribute("placeholder", "Enter initials");
let userSubmit = document.createElement("input");
userSubmit.setAttribute("value", "Submit");
userSubmit.setAttribute("type", "submit");
let endOptions = document.createElement("div");
let backBtn = document.createElement("button");
backBtn.setAttribute("class", "btn btn-info btn-md");
let highScores = document.querySelector("#highScores");

let playerScores = JSON.parse(window.localStorage.getItem("player-score")) || [];

let time;

// when the button is clicked it runs the function countdown() which starts the timer
beginBtn.addEventListener("click", function () {
  time = setInterval(countdown, 1000);
  displayQuest();
});

// timer begins at 60 seconds
let count = 60;

// score begins at 0
let score = 0;
let timesPlayed = "";

let currentQuestion = 0;

// this function when called will start a timer at 60 counting down every second
function countdown() {
  // countdown count -1
  count--;
  timer.textContent = `Timer: ${count}s`;
  if (count === 0) {
    timer.textContent = `Timer: 0s`;
    end();
  }
}

let quiz = [
  {
    question: "Commonly used data types DO NOT include:",
    options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts",
  },

  {
    question: "The condition in an if/else statement is enclosed within ____.",
    options: [
      "1. quotes",
      "2. curly brackets",
      "3. parenthesis",
      "4. square brackets",
    ],
    answer: "3. parenthesis",
  },

  {
    question: "Arrays on Javascript can be used to store _____.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },

  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    answer: "3. quotes",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. javascript",
      "2. terminal/bash",
      "3. for loops",
      "4. console log",
    ],
    answer: "4. console log",
  },
];


let buttons = [option1, option2, option3, option4];


function displayQuest() {
  // hide elements after clicking begin quiz
  beginBtn.style.display = "none";
  number1.style.display = "none";
  quizQuestion.innerHTML = "";
  jumbo.setAttribute("class", "jumbotron-new");

  jumbo.appendChild(btnGroup);

  btnGroup.appendChild(option1);

  btnGroup.appendChild(option2);

  btnGroup.appendChild(option3);

  btnGroup.appendChild(option4);

  // currentQuestion begins at 0 so quest = quiz[0] first object
  let quest = quiz[currentQuestion];
  quizQuestion.textContent = quest.question;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = quest.options[i];
    buttons[i].addEventListener("click", check);
  }
}

function check() {
  let playerAns = this.textContent;

  if (playerAns === quiz[currentQuestion].answer) {
    score = score + 5;
  } else {
    count -= 10;
  }

  currentQuestion++;
  if (currentQuestion < quiz.length) {
    displayQuest();
  } else {
    end();
  }
}

// when the game ends, player can add their initials and see high scores
function end() {
  clearInterval(time);
  timer.textContent = `Timer: 0s`;
  option1.style.display = "none";
  option2.style.display = "none";
  option3.style.display = "none";
  option4.style.display = "none";
  number1.style.display = "";
  number1.textContent = "All Done!";
  quizQuestion.textContent = `Your final score is: ${score}.`;
  quizQuestion.appendChild(initials);
  initials.appendChild(userInput);
  initials.appendChild(userSubmit);

  initials.addEventListener("submit", function (e) {
    e.preventDefault();
    let userInitials = userInput.value;

    let player = {
        user: userInitials,
        score: score,
    };

    playerScores.push(player);
    
    window.localStorage.setItem("player-score", JSON.stringify(playerScores));

    displayScore();
  });
}

function displayScore() {
  number1.textContent = "Highscores";

  quizQuestion.textContent = "";

  for (let i = 0; i < playerScores.length; i++) {
      let element = `${i+1}. ${playerScores[i].user} - ${playerScores[i].score}`;
      let space = document.createElement("br");

      quizQuestion.append(element, space);
  }

  jumbo.appendChild(endOptions);
  backBtn.textContent = "Go Back";
  endOptions.appendChild(backBtn);

  backBtn.addEventListener("click", function () {
      window.location.reload();
  });
}


