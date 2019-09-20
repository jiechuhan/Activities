var decrement = document.getElementById("decrement");
var increment = document.getElementById("increment");
var count = document.getElementById("count");
var x = 0;

decrement.addEventListener("click", function (){
    if (x>0) {
        count.textContent = --x;
    } else {
        return
    }
})

increment.addEventListener("click", function (){
    count.textContent = ++x;
})