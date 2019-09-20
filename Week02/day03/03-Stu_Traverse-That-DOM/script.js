let foo = document.getElementById('articles');

foo.style.fontSize = "50px";

console.log(foo.childElementCount)

foo.firstElementChild.lastElementChild.style.color = "blue";

foo.previousElementSibling.style.backgroundColor = "black";


let good = document.getElementById("main");

good.childNodes[1].style.textDecoration = "underline";

good.lastElementChild.style.fontSize = "50px";

good.firstElementChild.style.color = "orange";

good.lastElementChild.parentElement.style.fontSize = "40px";

