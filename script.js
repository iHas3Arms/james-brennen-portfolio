const hr = document.querySelector('hr');
const title = document.querySelector('.title');
const me = document.querySelector('.me');
const buzz = document.querySelector(".buzz");
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// let progress = document.getElementById('progressbar');
// let totalHeight = document.body.scrollHeight;
// window.onscroll = function() {
//     let progressHeight = (window.pageYOffset / totalHeight) * 100 * 10;
//     progress.style.height = progressHeight + "%";
// }

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
    me.style.width = "200px";
    me.style.transition = "all .5s ease 0s";
});

me.addEventListener('mouseout', () => {
    me.style.width = "150px";
    me.style.transition = "all .5s ease 0s";
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

let pieces = 35;

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

    if (types[ranType] === "circle") {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.left = `${ranWidth}px`;
        circle.style.top = `${ranHeight}px`;
        headerBG.appendChild(circle);
    } else if (types[ranType] === "square") {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.left = `${ranWidth}px`;
        square.style.top = `${ranHeight}px`;
        headerBG.appendChild(square);
    } else if (types[ranType] === "line") {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.transform = `rotate(calc(${randomNum(360)} * 1deg))`;
        line.style.left = `${ranWidth}px`;
        line.style.top = `${ranHeight}px`;
        headerBG.appendChild(line);
    }
}

function randomNum(amount) {
    return Math.floor(Math.random() * amount);
}

let header = document.querySelector('header');

let centerScreenW = document.documentElement.clientWidth / 2;
let centerScreenH = document.documentElement.clientHeight / 2;

// header.addEventListener('mousemove', (e) => {
//     let headerBG = document.querySelector('.header-background');
//     let difX;
//     let difY;
//     let direction = {
//         x: 0,
//         y: 0
//     }

//     let fromLeft;
//     let fromTop;

//     if (e.screenX < centerScreenW) {
//         difX = centerScreenW - e.screenX;
//         direction.x = 1;
//     } else if (e.screenX > centerScreenW) {
//         difX = e.screenX - centerScreenW;
//         direction.x = 0;
//     }
//     if (e.screenY < centerScreenH) {
//         difY = centerScreenH - e.screenY;
//         direction.y = 1;
//     } else if (e.screenY > centerScreenH) {
//         difY = e.screenY - centerScreenH;
//         direction.y = 0;
//     }
    
//     if (direction.x == 1) {
//         fromLeft = centerScreenW + difX;
//     } else if (direction.x == 0) {
//         fromLeft = difX;
//     }
//     if (direction.y == 0) {
//         fromTop = difY;
//     } else if (direction.y == 1) {
//         fromTop = centerScreenH + difY;
//     }

    // headerBG.style.left = `${difY / 100}px`;
    // headerBG.style.left = `${difX / 100}px`;
// });