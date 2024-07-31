// dark mode
document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const btn = document.querySelector(".btn");

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark");
    }

    btn.addEventListener('click', () => {
        body.classList.toggle('dark');

        if (body.classList.contains('dark')) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.removeItem("darkMode");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const btn = document.querySelector(".btn-2");

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark");
    }

    btn.addEventListener('click', () => {
        body.classList.toggle('dark');

        if (body.classList.contains('dark')) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.removeItem("darkMode");
        }
    });
});

// Countdown
var countDownDate = new Date("Sep 30,2024 07:30:00");
var x = setInterval(function(){
var now = new Date().getTime();
var countdown = countDownDate - now;

var days = Math.floor(countdown/(1000*60*60*24));
var hours = Math.floor((countdown % (1000*60*60*24))/(1000*60*60));
var minutes = Math.floor((countdown %(1000*60*60))/(1000*60));
var seconds = Math.floor((countdown%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(countdown < 0){
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
}
},1000);

document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log(entry);
            entry.target.classList.add("show");
        }
    })
})
const hiddenElements = document.querySelectorAll(".hidden");
// console.log(hiddenElements);
hiddenElements.forEach((el) => observer.observe(el));
})
