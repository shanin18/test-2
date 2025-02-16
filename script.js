// language dropdown
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
      if (!selectedFlag) {
        console.error("Selected flag data not found.");
        return;
      }
      dropdownBtn.innerHTML = `<img src="${selectedFlag}" alt="">
        <span class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.47634 5.01749L0.964577 0.982514L8.03564 0.982513C8.01816 1 4.47634 5.01749 4.47634 5.01749Z" fill="#121212"/>
            </svg>
        </span>`;
      dropdownMenu.classList.remove("show");
      arrow.classList.remove("rotate");
    });
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownBtn.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("show");
      arrow.classList.remove("rotate");
    }
  });
}


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


