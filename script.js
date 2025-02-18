const dropdownBtn = document.getElementById("selected-lang");
const dropdownMenu = document.getElementById("dropdown");
const arrow = document.querySelector(".arrow");

if (!dropdownBtn || !dropdownMenu || !arrow) {
  console.error("Required elements for language dropdown not found.");
} else {
  dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
    arrow.classList.toggle("rotate");
  });

  document.querySelectorAll(".dropdown-content div").forEach((item) => {
    item.addEventListener("click", function () {
      const selectedFlag = this.dataset.flag;
      const selectedLang = this.getAttribute("data-lang");

      if (!selectedFlag || !selectedLang) {
        console.log("Selected flag or language data not found.");
        return;
      }

      const btnImg = dropdownBtn.querySelector("img");
      const btnText = dropdownBtn.querySelector("span");

      btnImg.src = selectedFlag;
      btnImg.alt = selectedLang;
      btnText.textContent = selectedLang.charAt(0).toUpperCase() + selectedLang.slice(1);

      dropdownMenu.classList.remove("show");
      arrow.classList.remove("rotate");
    });
  });

  document.addEventListener("click", function (event) {
    if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove("show");
      arrow.classList.remove("rotate");
    }
  });
}


// toggle menu
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  const menuIcon = document.getElementById("menuIcon");

  const menuOpenIcon = "./assets/menu-icon.png"; // Your menu icon
  const menuCloseIcon = "./assets/close-icon.png"; // Your close icon

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active"); // Toggle menu visibility

    // Fade out current icon, change source, then fade in
    menuIcon.classList.add("hidden");
    setTimeout(() => {
      menuIcon.src = menu.classList.contains("active") ? menuCloseIcon : menuOpenIcon;
      menuIcon.classList.remove("hidden");
    }, 200); // Wait for fade-out before changing image
  });
});




// section title animation
document.addEventListener("DOMContentLoaded", function () {
  const textContainers = document.querySelectorAll(".text-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          
          // Apply transition delays dynamically
          const words = entry.target.querySelectorAll(".word");
          words.forEach((word, wordIndex) => {
            const letters = word.querySelectorAll("span");
            letters.forEach((letter, letterIndex) => {
              // Apply a delay based on the character's position
              letter.style.transitionDelay = `${(wordIndex * 0.4 + letterIndex * 0.2)}s`;
            });
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  textContainers.forEach((textContainer) => {
    observer.observe(textContainer);
  });
});

// aos animations
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".aos");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(element => observer.observe(element));
});




