const headerNav = document.querySelector(".header-nav");
const hamburgerMenu = document.querySelector(".hamburger-button");

headerNav.classList.add("hide-js");
hamburgerMenu.style.display = 'block';

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("open");
  if (headerNav.classList.contains("hide-js")) {
    headerNav.classList.remove("hide-js");
  } else {
    headerNav.classList.add("hide-js");
  }
});

function checkWindowWidth() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 900) {
    hamburgerMenu.style.display = 'none';
    headerNav.classList.add("hide-js");
    hamburgerMenu.classList.remove("open");
  } else {
    hamburgerMenu.style.display = 'block';
  }
}

checkWindowWidth();

window.addEventListener("resize", checkWindowWidth);
