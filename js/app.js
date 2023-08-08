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

const dropdownToggle = document.querySelector(".show");
const dropdownMenu = document.querySelector(".dropdown");

// Add event listener
dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");

  if (!dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.toggle("animate-scale-up-hor-left");
  } else {
    dropdownMenu.classList.toggle("animate-slide-rotate-ver-r-fwd");
    dropdownMenu.classList.toggle("hidden");
    setTimeout(() => {
      dropdownMenu.classList.add("hidden");
      dropdownMenu.classList.toggle("animate-slide-rotate-ver-r-fwd");
      dropdownMenu.classList.toggle("animate-scale-up-hor-left");
    }, 500);
  }
});
