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
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});
navbarMenu.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  document.querySelector(link).scrollIntoView({ behavior: "smooth" });
});
