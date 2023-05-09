var random1 = (Math.floor(Math.random() * 6)) + 1;
var randomimage = "images/dice"+random1+".png";
var p1 = document.querySelectorAll("img")[0];
p1.setAttribute("src",randomimage);

var random2 = (Math.floor(Math.random() * 6)) + 1;
var randomimage = "images/dice"+random2+".png";
var p2 = document.querySelectorAll("img")[1];
p2.setAttribute("src",randomimage);

if (random1 > random2){
    document.querySelector("h1").innerHTML = "🏴 Player1 win"
}
else if (random2 > random1){
    document.querySelector("h1").innerHTML = "Player2 win🏴"
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}