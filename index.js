let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let secondsElement = document.createElement("p");
let spinnerEl = document.getElementById("spinner");
secondsElement.textContent = "seconds";
secondsElement.classList.add("seconds-element");
let countdown = 0;
let intervalId = setInterval(function() {
    countdown = countdown + 1;
    timerEl.textContent = countdown + " " + secondsElement.textContent;
}, 1000);
let options = {
    method: "GET"
}

function take() {
    let url = "https://apis.ccbp.in/random-quote";
    spinnerEl.classList.remove("spinner");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplayEl.textContent = jsonData.content;
            spinnerEl.classList.add("spinner");
        })
}
take();
submitBtnEl.addEventListener("click", function(event) {
    clearInterval(intervalId);
    let timeTaken = timerEl.textContent;
    if (quoteDisplayEl.textContent !== quoteInputEl.value) {
        resultEl.textContent = "You typed Incorrect sentence";
    } else {
        resultEl.textContent = "";
        resultEl.textContent = "You typed in " + timeTaken;
    }
});
resetBtnEl.addEventListener("click", function(event) {
    take();
    resultEl.textContent = "";
    quoteInputEl.value = "";
    
})