// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

function toggleDropdown(dropdown) {
  dropdown.classList.toggle("hidden");

  if (!dropdown.classList.contains("hidden")) {
    dropdown.classList.toggle("animate-slide-rotate-ver-l-bck-masuk");
  } else {
    dropdown.classList.toggle("animate-slide-rotate-ver-l-bck-masuk");
    dropdown.classList.toggle("animate-slide-rotate-ver-l-bck");
    dropdown.classList.toggle("hidden");
    setTimeout(() => {
      dropdown.classList.add("hidden");
      dropdown.classList.toggle("animate-slide-rotate-ver-l-bck");
      dropdown.classList.remove("animate-slide-rotate-ver-l-bck-masuk");
    }, 500);
  }
}

const allDropdowns = document.querySelectorAll(".dropdown");
document.querySelectorAll(".toggleDropdownNavbar").forEach((toggle) => {
  const dropdown = toggle.nextElementSibling;
  toggle.addEventListener("click", () => {
    allDropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.add("hidden");
        otherDropdown.classList.remove("animate-slide-rotate-ver-l-bck-masuk");
        otherDropdown.classList.remove("animate-slide-rotate-ver-l-bck");
      }
    });
    toggleDropdown(dropdown);
  });
});

const Hjumbotron = new Typed("#Hjumbotron", {
  strings: ["NEW SCOOPING", "New Style", "Join trend"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
  showCursor: false,
  cursorChar: "|",
  autoInsertCss: true,
});
