var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");
var timeEl = document.querySelector(".time");
var bodyEL = document.createElement("div")
var mainEl = document.getElementById("main");

var secondsLeft = 5;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      speedRead();
    }

  }, 1000);
}

setTime()

function speedRead() {
  mainEl.t

  var content = document.createElement('p')
  content.textContent = poem
  mainEl.appendChild(content)


}