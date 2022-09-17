const hr = document.querySelector('hr');
const title = document.querySelector('.title');
const me = document.querySelector('.me');
const buzz = document.querySelector(".buzz");
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

console.log(me.style.width);
console.log(me.style.height);

// let progress = document.getElementById('progress-bar');
// let totalHeight = document.body.scrollHeight;
// window.onscroll = function() {
//     let progressHeight = (window.pageYOffset / totalHeight) * 100;
//     progress.style.height = progressHeight + "%";
// }

function scrollbarProgress() {
    let totalHeight = document.body.scrollHeight;
    let currentYOffset = document.documentElement.scrollTop;
    let windowHeight = document.documentElement.clientHeight;

    let scrollbar = document.querySelector(".scrollbar");

    console.log(totalHeight);
    console.log(currentYOffset);
    console.log(windowHeight);

    scrollbar.style.height = Math.round((currentYOffset / (totalHeight - windowHeight)) * 100) + "%";
}

document.addEventListener("scroll", scrollbarProgress);

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


title.addEventListener('mouseover', () => {
    hr.style.height = "16px";
    hr.style.width = "0";
    hr.style.transition = "all .2s ease 0s";
});

title.addEventListener('mouseout', () => {
    hr.style.height = "0";
    hr.style.width = "0";
    hr.style.transition = "all .2s ease 0s";
});

me.addEventListener('mouseover', () => {
    me.style.width = "20%";
    me.style.transition = "all .5s ease 0s";
    console.log(me.style.width);
});

me.addEventListener('mouseout', () => {
    me.style.width = "15%";
    me.style.transition = "all .5s ease 0s";
    console.log(me.style.width);
});

requestAnimationFrame(buzzFunc);

function buzzFunc() {
    buzz.style.animationName = "buzzAn";
    buzz.style.animationDuration = "1s";
    setTimeout(() => {
        buzz.style.animationName = "none";
        buzz.style.animationDuration = "0s";
    }, 1000);
    setTimeout(buzzFunc, Math.floor(Math.random() * 10000) + 3000);
}

setTimeout(() => {
    let mask = document.querySelector('.mask');

    mask.style.display = "none";
}, 2000);

let types = ["circle", "square", "line"];

let pieces = 75;

if (document.documentElement.clientWidth < 920) pieces = 37;

for (i=0; i<pieces; i++) {
    makePart();
}

function makePart() {
    let ranType = randomNum(types.length);
    let screenWidth = document.documentElement.clientWidth;
    let screenHeight = document.documentElement.clientHeight;
    let ranWidth = randomNum(screenWidth);
    let ranHeight = randomNum(screenHeight);
    if (ranHeight < 50) ranHeight += 50;
    if (ranHeight > screenHeight - 50) ranHeight -= 50;
    if (ranWidth < 50) ranWidth += 50;
    if (ranWidth > screenWidth - 50) ranWidth -= 50;
    let headerBG = document.querySelector('.header-background');

    console.log(screenWidth);
    console.log(ranWidth);

    const obj = document.createElement('div');
    obj.classList.add(types[ranType].toString());
    if (types[ranType] == "line") obj.style.transform = `rotate(calc(${randomNum(360) + 1} * 1deg))`;
    obj.style.left = `${ranWidth}px`;
    obj.style.top = `${ranHeight}px`;
    headerBG.appendChild(obj);
}

function randomNum(amount) {
    return Math.floor(Math.random() * amount);
}

let header = document.querySelector('header');

let centerScreenW = document.documentElement.clientWidth / 2;
let centerScreenH = document.documentElement.clientHeight / 2;
