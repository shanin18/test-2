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