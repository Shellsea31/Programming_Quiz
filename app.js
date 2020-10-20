
// this targets the h3 which will eventually display a timer
let timer = document.querySelector("#timer");

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


function quest1() {
    // change the look of the area
    let jumbo = document.querySelector(".jumbotron");
    jumbo.setAttribute("class", "jumbotron-new");

    // target the id and change the content
    let number1 = document.querySelector("#text1");
    number1.textContent = "Question 1";

    // target the id and change the content
    let question = document.querySelector("#text2");
    question.textContent = "Commonly used data types DO NOT include:"

    // create button and give it bootstrap style
    let option1 = document.createElement("button");
    option1.textContent = "1. Strings";
    option1.setAttribute("type", "submit")
    option1.setAttribute("class", "btn-sm btn-info")
    console.log(option1);
    jumbo.appendChild(option1);

}

// target the button that begins quiz
let beginBtn = document.querySelector("#begin");

// when the button is clicked it runs the function countdown() which starts the timer
beginBtn.addEventListener("click", function () {
    countdown();
    quest1();
});


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

