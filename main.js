"use strict";

// Make navbar pransparent when it is on the top
const navbar = document.getElementById("navbar");
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
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Navbar click
const navbarMenuItems = document.querySelectorAll(".navbar__menu__item");
navbarMenu.addEventListener("click", (event) => {
  navbarMenuItems.forEach((item) => {
    if (event.target === item) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

// Handle clicking navbar button
const navbarToggleBtn = document.querySelector(".navbar__toggle_Btn");
const navbar__menu = navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
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

// Handle scrolling when clicking arrow button
const arrow_up = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    arrow_up.classList.add("visible");
  } else {
    arrow_up.classList.remove("visible");
  }
});
arrow_up.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Filtering projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and selesct the new ones
  const active = document.querySelector(".category__btn.selected");
  if (active != null) {
    active.classList.remove("selected");
  }
  event.target.classList.add("selected");

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || project.dataset.type === filter) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

// Functions
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
