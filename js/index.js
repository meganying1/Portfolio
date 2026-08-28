// Mobile navigation: the hamburger button opens and closes the small-screen menu
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close",
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

function setMenuOpen(isOpen) {
  smallMenu.classList.toggle("header__sm-menu--active", isOpen);
  headerHamMenuBtn.classList.toggle("d-none", isOpen);
  headerHamMenuCloseBtn.classList.toggle("d-none", !isOpen);
}

hamMenuBtn.addEventListener("click", () => {
  setMenuOpen(!smallMenu.classList.contains("header__sm-menu--active"));
});

headerSmallMenuLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

// Clicking the logo returns home. The URL is resolved against this script's own
// location so it works from the site root and from subpages.
const homeURL = new URL("../index.html", document.currentScript.src).href;
const headerLogoContainer = document.querySelector(".header__logo-container");

headerLogoContainer.addEventListener("click", () => {
  location.href = homeURL;
});
