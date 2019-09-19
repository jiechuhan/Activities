// // Create your HTML Page via DOM Methods here!
let foo = document.createElement("h1")

foo.textContent = "Title"

document.body.appendChild(foo)


let fo = document.createElement("h2")

fo.textContent = "Subtitle"

document.body.appendChild(fo)



let image = document.createElement("img")

image.setAttribute("src", "https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7")

document.body.appendChild(image)

image.setAttribute("style", "width: 30%")


let caption = document.createElement("p")

caption.textContent = "this is a caption"

document.body.appendChild(caption)


let myfav = document.createElement("ul")
myfav.setAttribute("id", "Myfav");
document.body.appendChild(myfav);


for (i=0; i<5; i++) {
    let list = document.createElement("li")
    let content = document.createTextNode("ice cream")
    list.appendChild(content);
    document.getElementById("Myfav").appendChild(list);
}