var submitEL = document.querySelector("#submit")
var meal = document.querySelector("#total")
var tipPercent = document.querySelector("#tip-percentage")
var tipAmount = document.querySelector("#tip-amount")
var totalAmount = document.querySelector("#new-total")

var total;

submitEL.addEventListener("click", function(event) {
    event.preventDefault();

    var tip = meal.value * tipPercent.value * 0.01

    tipAmount.textContent = tip

    total = meal.value * ( 1 + tipPercent.value * 0.01)

    totalAmount.textContent = total.toFixed(2)
});


var splitEL = document.querySelector("#split")
var numPeople = document.querySelector("#num-people")
var split = document.querySelector("#split-total")

splitEL.addEventListener("click", function(event2) {
    event2.preventDefault();

    var splitAmount = total / numPeople.value 

    split.textContent = splitAmount.toFixed(2)

});