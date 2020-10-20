// target the button that begins quiz
let beginBtn = document.querySelector("#begin");

// when the button is clicked it runs the function countdown() which starts the timer
beginBtn.addEventListener("click", function () {
    countdown();
    quiz();
});






// this targets the h3 which will eventually display a timer
let timer = document.querySelector("#timer");

// timer begins at 60 seconds
let count = 60

// this function when called will start a timer at 60 counting down every second
function countdown() {
    let time = setInterval(function () {
        // countdown count -1
        count--
        // this 
        timer.textContent = (`Timer: ${count}s`);
        if (count === 50) {
            clearInterval(time)
        }
    }, 1000) //1,000 runs it every second
}

function quiz() {
    let questions = document.querySelector("#text1")
console.log(questions);

questions.textContent = "Question 1";
}


//  when displaying score might need to use <span> to affect only the score and not the entire element
//  create a function for questions with if and else statements and call it at the click function
// refer to WebApi activity 22 Local Storage Uh oh



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

