"use strict";
const body = document.querySelector("body");
const navbar = document.getElementById("navbar");

// Make navbar pransparent when it is on the top
document.addEventListener("scroll", () => {
  const navbar_height = navbar.getBoundingClientRect().height;
  if (window.scrollY > navbar_height / 2) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Handle scrolling contact me button
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home__container = document.querySelector(".home__container");
const home_height = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home__container.style.opacity = 1 - window.scrollY / home_height;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
