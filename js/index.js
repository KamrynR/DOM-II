// Your code goes here
let headerH = document.querySelector("header");
headerH.style = "z-index: 1";

let colorNav = document.querySelector(".nav");
// 1
colorNav.addEventListener("mouseover", function(event){
    event.target.style.color = "blue";
    setTimeout(function (){
        event.target.style.color = "";
    }, 500);
    event.stopPropagation();
}, false);

let bigImg = document.querySelector("img");
// 2
bigImg.addEventListener("mouseenter", function(event){
    event.target.style.transform = "scale(1.05)";
    event.target.style.transition = "transform 1s";
    event.stopPropagation();
});
// 3
bigImg.addEventListener("mouseleave", function(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.transition = "transform .5s";
    event.stopPropagation();
});

let imgClass = document.querySelectorAll("img");
imgClass[1].setAttribute("class", "imgRect");
imgClass[2].setAttribute("class", "imgRect");

document.querySelectorAll(".imgRect").forEach((x) => {
// 4
x.addEventListener("dblclick", (e) => {
    x.src = 'https://picsum.photos/400/300';
    e.stopPropagation();
    });
});

document.querySelectorAll(".imgRect").forEach((x) => {
// 5
x.addEventListener("mouseover", (e) =>{
    x.style.opacity = ".9";
    x.style.transition = "transform 1s";
    setTimeout(function (){
        x.style.opacity = "1";
        x.style.transition = "transform 1s";
    }, 1000);
    e.stopPropagation();
    });
});

let randColor = function(){
    let randNum1 = Math.floor(Math.random()*250);
    let randNum2 = Math.floor(Math.random()*250);
    let randNum3 = Math.floor(Math.random()*250);
    return `rgb(${randNum1}, ${randNum2}, ${randNum3})`;
};

let keyDown = document.querySelector("body");
// 6
keyDown.addEventListener("keydown", () => {
    keyDown.style = 'background-color:' + randColor();
    setTimeout(() => {
        keyDown.style = 'background-color: null'
    }, 500);
});

let headCR = document.querySelector(".main-navigation");
// 7
window.addEventListener("resize", () => {
    headCR.style = `background-color: #FFEBCD`;
});

let scrollChange = document.querySelector("p");
// 8
window.addEventListener("scroll", () => {
    scrollChange.style.color = randColor();
    setTimeout(function (){
        scrollChange.style.color = "black";
    }, 1000);
});

let imgBoat = document.querySelectorAll("img");
// 9
window.addEventListener("dblclick", () => {
imgBoat[3].src = 'https://picsum.photos/600/200';
});

let bigText = document.querySelectorAll("p");
// 10
window.addEventListener("mouseover", () => {
    bigText[5].style = "font-weight: bold";
})

let inactiveButton = document.querySelectorAll(".btn");
inactiveButton[0].setAttribute('onclick', 'googleFunction()');
let googleD = document.createElement("div");
googleD.setAttribute("class", "googleD1");
googleD.innerHTML = "edited by KR"
let body = document.querySelector("body");
function googleFunction() {
    body.appendChild(googleD);
};
// preventDefault()
document.querySelectorAll(".nav-link").addEventListener("click", function(x) {
    x.preventDefault();
});