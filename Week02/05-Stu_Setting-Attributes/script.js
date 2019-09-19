var Timg = document.querySelectorAll("img");
var Ghref = document.querySelectorAll("a");
var bodyStyle = document.querySelectorAll("div");


for (i=0; i<Timg.length; i++ ) {
    Timg[i].setAttribute("src", "https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7", "alt", "spongebob");
    Timg[i].setAttribute("style", "width: 30%");
};

for (j=0; j<Ghref.length; j++ ) {
    Ghref[j].setAttribute("href", "http://github.com");
};

for (k=0; k<bodyStyle.length; k++) {
    bodyStyle[k].setAttribute("style", "margin: 20px; padding: 20px; width: 80%")
}