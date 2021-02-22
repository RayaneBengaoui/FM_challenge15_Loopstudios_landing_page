const hamburgerBtn = document.querySelector(".mobile-nav");
const desktopNav = document.querySelector(".desktop-nav");

hamburgerBtn.addEventListener("click", () => {
  desktopNav.classList.toggle("nav-open");
});
