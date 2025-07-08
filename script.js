//script.js

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const html = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
}

// Scroll animation observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate");
    }
  });
}, observerOptions);

// Observe all elements with data-aos attribute
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-aos]");
  animatedElements.forEach(el => observer.observe(el));
});

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1); // remove #
    const targetElement = document.getElementById(targetId);

    // Custom offset per section
    let offset = 0;
    switch (targetId) {
      case "home":
        offset = -50;
        break;
      case "about":
        offset = -70;
        break;
      case "experience":
        offset = -5;
        break;
      case "skills":
        offset = -130;
        break;
      default:
        offset = -60;
    }

    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });

    // Optional: close mobile nav
    navLinks.classList.remove("show");
  });
});



function showPopup() {
  document.getElementById("custom-popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("custom-popup").style.display = "none";
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json"
    }
  }).then(response => {
    if (response.ok) {
      showPopup();
      form.reset();
    } else {
      alert("Error submitting form. Please try again later.");
    }
  });
});

const titles = [
  "MCS Student at UIUC", 
  "Aspiring Data Scientist",
  "AI Enthusiast",
];


let index = 0;
let charIndex = 0;
let isDeleting = false;
const titleElement = document.getElementById("changing-title");

function typeEffect() {
  const currentTitle = titles[index];
  
  if (isDeleting) {
    // Remove characters
    charIndex--;
    titleElement.textContent = currentTitle.substring(0, charIndex);
  } else {
    // Add characters
    charIndex++;
    titleElement.textContent = currentTitle.substring(0, charIndex);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentTitle.length) {
    // Pause at full word
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // Move to next title
    isDeleting = false;
    index = (index + 1) % titles.length;
    speed = 400;
  }
  setTimeout(typeEffect, speed);
}

// Start the effect
typeEffect();

const greetings = [
  "Hola!",
  "Bonjour!",
  "Ciao!",
  "Hello!",
];

let greetIndex = 0;
const greetingText = document.getElementById("greeting-text");

function rotateGreeting() {
  greetingText.classList.remove("fade-in");
  greetingText.classList.add("fade-out");

  setTimeout(() => {
    greetingText.textContent = greetings[greetIndex];
    greetingText.classList.remove("fade-out");
    greetingText.classList.add("fade-in");

    greetIndex = (greetIndex + 1) % greetings.length;
  }, 500);
}

setInterval(rotateGreeting, 2500); 
