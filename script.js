// ========== MOBILE MENU ==========
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    menuIcon.classList.toggle("fa-bars");
    navbar.classList.toggle("active");
};

// Menu link click hone pe menu band karo
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        navbar.classList.remove("active");
    });
});

// ========== ACTIVE NAVBAR ON SCROLL ==========
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add("active");
            });
        }
    });

    // Sticky Header
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);
};

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ========== TYPING EFFECT ==========
const text = [
    "Full Stack Developer",
    "Web Developer",
    "AI / ML Enthusiast",
    "BCA Student"
];

let index = 0;
let char = 0;
let isDeleting = false;

const typing = document.querySelector(".home-content h3 span");

function type() {
    const current = text[index];

    if (!isDeleting) {
        typing.textContent = current.substring(0, char + 1);
        char++;

        if (char === current.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else {
            setTimeout(type, 100);
        }
    } else {
        typing.textContent = current.substring(0, char - 1);
        char--;

        if (char === 0) {
            isDeleting = false;
            index++;
            if (index >= text.length) index = 0;
            setTimeout(type, 300);
        } else {
            setTimeout(type, 50);
        }
    }
}

typing.textContent = "";
setTimeout(type, 500);

// ========== FOOTER YEAR ==========
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ========== CONTACT FORM FEEDBACK ==========
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", () => {
        const btn = contactForm.querySelector("button");
        btn.textContent = "Sending...";
        btn.disabled = true;
    });
}
