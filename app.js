const hamburgerBtn = document.querySelector(".mobile-nav");
const desktopNav = document.querySelector(".desktop-nav");
const body = document.querySelector("body");

hamburgerBtn.addEventListener("click", () => {
  desktopNav.classList.toggle("nav-open");
  body.classList.toggle("no-scroll");
  if (desktopNav.classList.contains("nav-open")) {
    hamburgerBtn.children[0].src = "./images/icon-close.svg";
  } else {
    hamburgerBtn.children[0].src = "./images/icon-hamburger.svg";
  }
});
