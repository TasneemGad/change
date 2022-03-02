const Allcolors = ["green","red","Black","Brown","CadetBlue","DarkBlue","DarkOliveGreen","DarkRed","FireBrick","GoldenRod","#Indigo","#800000","DarkSlateGrey"];
const btn = document.getElementById("btn");
const textcolor =document.querySelector(".color");

btn.addEventListener("click",function(e) {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.background = Allcolors[randomNumber];
    textcolor.textContent = Allcolors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * Allcolors.length);
};
var icons=document.getElementById("icon");
icons.onclick = function(){
    document.body.classList.toggle("dark-theme");
}