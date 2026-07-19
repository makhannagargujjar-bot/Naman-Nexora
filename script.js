// ==========================
// Premium Portfolio Script
// ==========================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close Menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// Typing Animation
const text = [
    "Professional Web Developer",
    "UI Designer",
    "Frontend Developer",
    "JavaScript Lover"
];

let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    current = text[count];
    letter = current.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === current.length) {

        setTimeout(() => {

            index = 0;
            count++;

            setTimeout(type, 300);

        }, 1500);

    } else {

        setTimeout(type, 100);

    }

})();

// Header Shadow
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 15px 40px rgba(0,229,255,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

// Scroll Reveal
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = ".8s";

});

// Floating Background Particles
const particles = document.getElementById("particles");

for (let i = 0; i < 40; i++) {

    const dot = document.createElement("span");

    dot.style.position = "absolute";
    dot.style.width = Math.random() * 6 + 2 + "px";
    dot.style.height = dot.style.width;
    dot.style.borderRadius = "50%";
    dot.style.background = "rgba(0,229,255,.45)";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = Math.random() * 100 + "%";
    dot.style.animation = `float${i} ${8 + Math.random() * 8}s linear infinite`;

    particles.appendChild(dot);

    const style = document.createElement("style");

    style.innerHTML = `
    @keyframes float${i}{
        from{
            transform:translateY(0);
            opacity:.2;
        }
        to{
            transform:translateY(-900px);
            opacity:1;
        }
    }`;

    document.head.appendChild(style);

}// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Contact Form

document.querySelector(".contact-form")
.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been sent.");

});