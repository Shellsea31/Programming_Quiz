
// this targets the h3 which will eventually display a timer
let timer = document.querySelector("#timer");

// timer begins at 60 seconds
let count = 60

// this function when called will start a timer at 60 counting down every second
function countdown() {
    let time = setInterval(function () {
        // countdown count -1
        count--
        console.log(count)
        // this 
        timer.textContent = (`Timer: ${count}s`);
        if (count === 50) {
            console.log("stop here")
            clearInterval(time)
        }
    }, 1000) //1,000 runs it every second
}
// called the function
// countdown();


// create a main page which when clicks starts, begins timer and asks questions
// save each answer score to local storage and later on get it to display as highscore
// create option buttons
// create questions and then display if they were wrong or right 



