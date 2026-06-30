// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// ==============================
// SMOOTH FADE-IN ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
    ".about, .card, .gallery-grid img, .contact-box, .stat"
);

const reveal = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

document.querySelectorAll(".btn, .btn-outline, .dark-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});

// ==============================
// GALLERY HOVER ZOOM
// ==============================

document.querySelectorAll(".gallery-grid img").forEach(image => {

    image.addEventListener("mousemove", () => {
        image.style.transform = "scale(1.05)";
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
    });

});

// ==============================
// HERO PARALLAX EFFECT
// ==============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    hero.style.backgroundPositionY = scroll * 0.4 + "px";

});

// ==============================
// END
// ==============================

console.log("Aurora Studio Loaded Successfully ✨");