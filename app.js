// target the necessary elements
let beginBtn = document.querySelector("#begin");
let number1 = document.querySelector("#text1");
let jumbo = document.querySelector(".jumbotron");
let question = document.querySelector("#text2");
let timer = document.querySelector("#timer");
///////////////////////////////////////////////////////////////
// styled groups and buttons 
// create a div with bootstrap properties that make buttons vertical
let btnGroup = document.createElement("div");
btnGroup.setAttribute("class", "btn-group-vertical")
// create buttons and give them bootstrap style
let option1 = document.createElement("button");
option1.setAttribute("type", "submit")
option1.setAttribute("class", "btn-sm btn-info")
let option2 = document.createElement("button");
option2.setAttribute("type", "submit")
option2.setAttribute("class", "btn-sm btn-info")
let option3 = document.createElement("button");
option3.setAttribute("type", "submit")
option3.setAttribute("class", "btn-sm btn-info")
let option4 = document.createElement("button");
option4.setAttribute("type", "submit")
option4.setAttribute("class", "btn-sm btn-info")



// when the button is clicked it runs the function countdown() which starts the timer
beginBtn.addEventListener("click", function () {
    countdown();
    displayQuest();
});



// timer begins at 60 seconds
let count = 61
// score begins at 0
let score = 0

// this function when called will start a timer at 60 counting down every second
function countdown() {
    let time = setInterval(function () {
        // countdown count -1
        count--
        // this 
        timer.textContent = (`Timer: ${count}s`);
        if (count === 55) {
            clearInterval(time)
        }
    }, 1000) //1,000 runs it every second
}

let quiz = [{
        question: ["Commonly used data types DO NOT include:"],
        options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answer: "3. Alerts",
    },

    {
        question: ["The condition in an if/else statement is enclosed within ____"],
        options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "3. parenthesis",
    },

    {
        question: ["Arrays on Javascript can be used to store _____"],
        options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above",
    }


]

// console.log(quiz[1].question)
// correct way to console.log for objects
// console.log(quiz[0].answer, quiz[0].question, quiz[0].options);


function displayQuest() {
    // hide elements after clicking begin quiz
    beginBtn.style.display = "none";
    number1.style.display = "none";

    jumbo.setAttribute("class", "jumbotron-new");

    jumbo.appendChild(btnGroup);

    btnGroup.appendChild(option1);
    option1.textContent = "1. Strings";

    btnGroup.appendChild(option2);
    option2.textContent = "2. Booleans";

    btnGroup.appendChild(option3);
    option3.textContent = "3. Alerts";

    btnGroup.appendChild(option4);
    option4.textContent = "4. Numbers";

    for (let i = 0; i < quiz.length; i++) {
        let currentQ = quiz[i].question;
        question.textContent = currentQ;
        console.log(currentQ);
    }
}




//  when displaying score might need to use <span> to affect only the score and not the entire element
//  create a function for questions with if and else statements and call it at the click function
// refer to WebApi activity 22 Local Storage Uh oh
// use remove() - searched the web :)
// you might need to add values to each question and push them to an array
// then add the items in the array to get the high score.



// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score