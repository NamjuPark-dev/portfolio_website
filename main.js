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
