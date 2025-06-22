//script.js
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for your message!");
});

const titles = [
  "MCS Student at UIUC", 
  "Aspring Software Engineer",
  "AI/ML Enthusiast",
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
