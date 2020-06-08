// Your code goes here
let headerH = document.querySelector("header");
headerH.style = "z-index: 1";

let colorNav = document.querySelector(".nav");
colorNav.addEventListener("mouseover", function(event){
    event.target.style.color = "blue";
    setTimeout(function (){
        event.target.style.color = "";
    }, 500);
    event.stopPropagation();
}, false);

let bigImg = document.querySelector("img");
bigImg.addEventListener("mouseenter", function(event){
    event.target.style.transform = "scale(1.05)";
    event.target.style.transition = "transform 1s";
    event.stopPropagation();
});
bigImg.addEventListener("mouseleave", function(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.transition = "transform .1s";
    event.target.style = "z-index: -1";
    event.stopPropagation();
});

let imgClass = document.querySelectorAll("img");
imgClass[1].setAttribute("class", "imgRect");
imgClass[2].setAttribute("class", "imgRect");

document.querySelectorAll(".imgRect").forEach((x) => {
x.addEventListener("dblclick", (e) => {
    x.src = 'https://picsum.photos/400/300';
    e.stopPropagation();
    });
});

document.querySelectorAll(".imgRect").forEach((x) => {
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
keyDown.addEventListener("keydown", () => {
    keyDown.style = 'background-color:' + randColor();
    setTimeout(() => {
        keyDown.style = 'background-color: null'
    }, 500);
});
let headCR = document.querySelector(".main-navigation");
window.addEventListener("resize", () => {
    headCR.style = `background-color: #FFEBCD`;
});
