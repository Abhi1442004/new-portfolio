// ==============================
// Typing Animation
// ==============================

const typedText = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typedText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typedText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 80 : 150
    );
}

typeEffect();


// ==============================
// Active Navigation Highlight
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }
    });
});


// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: "smooth"
            });
        }
    });
});



window.addEventListener("scroll", () => {
    const winScroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("scroll-progress").style.height =
        scrolled + "%";
});

// ==============================
// Fade In Effect
// ==============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";
});


// ==============================
// Console Message
// ==============================

console.log(
    "%cWelcome to Abhi's Portfolio 🚀",
    "color:#00bfa6;font-size:18px;font-weight:bold;"
);

console.log(
    "%cBuilt using HTML, CSS and JavaScript",
    "color:white;font-size:14px;"
);

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target =
        parseFloat(counter.dataset.target);

    let current = 0;

    const updateCounter = () => {

        current += target / 80;

        if(current < target){

            if(target < 10){
                counter.innerText =
                current.toFixed(2);
            }else{
                counter.innerText =
                Math.floor(current);
            }

            requestAnimationFrame(
                updateCounter
            );

        }else{

            if(target < 10){
                counter.innerText =
                target.toFixed(2);
            }else{
                counter.innerText =
                target;
            }
        }
    };

    updateCounter();
});



const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
});

function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";

    requestAnimationFrame(animateRing);
}

animateRing();

const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .resume-card, .certificate-card"
);

hoverElements.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        ring.classList.add("hover");
    });

    item.addEventListener("mouseleave", () => {
        ring.classList.remove("hover");
    });
});

document.addEventListener("click", (e) => {

    const ripple = document.createElement("span");

    ripple.style.position = "fixed";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    ripple.style.width = "10px";
    ripple.style.height = "10px";
    ripple.style.border = "2px solid #00bfa6";
    ripple.style.borderRadius = "50%";
    ripple.style.pointerEvents = "none";
    ripple.style.transform = "translate(-50%, -50%)";
    ripple.style.zIndex = "9999";

    document.body.appendChild(ripple);

    ripple.animate(
        [
            {
                width: "10px",
                height: "10px",
                opacity: 1
            },
            {
                width: "80px",
                height: "80px",
                opacity: 0
            }
        ],
        {
            duration: 500,
            easing: "ease-out"
        }
    );

    setTimeout(() => ripple.remove(), 500);
});




const light = document.querySelector(".mouse-light");

document.addEventListener("mousemove", e => {
    light.style.left = e.clientX - 200 + "px";
    light.style.top = e.clientY - 200 + "px";
});


