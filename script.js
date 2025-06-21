document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for your message!");
});

const titles = [
  "MCS Student at UIUC", 
  "Software Engineer",
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
