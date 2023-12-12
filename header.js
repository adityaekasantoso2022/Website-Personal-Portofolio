const THRESHOLD_DESKTOP = 89.5;
const THRESHOLD_MOBILE = 77;

const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const navUl = document.querySelector("nav ul");

const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.querySelector(".menu-icon");
const menuLines = document.querySelectorAll(".menu-line");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");
  menuToggle.classList.toggle("active");

  const currentThreshold =
    window.innerWidth <= 768 ? THRESHOLD_MOBILE : THRESHOLD_DESKTOP;
  const currentSection = Array.from(sections).find((section) => {
    const sectionTop = section.offsetTop - currentThreshold;
    const sectionHeight = section.clientHeight;
    return (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    );
  });

  if (currentSection) {
    if (currentSection.classList.contains("dark-section")) {
      menuIcon.style.fill = "#fff";
      menuLines.forEach((line) => (line.style.fill = "#fff"));
    } else {
      menuIcon.style.fill = "#000";
      menuLines.forEach((line) => (line.style.fill = "#000"));
    }
  }
});

const startProjectButton = document.querySelector(".btn.primary-nav");

function updateColorOnSection(currentSection) {
  if (currentSection.classList.contains("dark-section")) {
    header.style.backgroundColor = "#000";
    header.style.color = "#fff";
    menuIcon.style.fill = "#fff";
    menuLines.forEach((line) => (line.style.fill = "#fff"));
    navUl.style.backgroundColor = "#000";
    // startProjectButton.style.backgroundColor = "#fff";
    // startProjectButton.style.color = "#000";
    startProjectButton.classList.remove("light-section");
    startProjectButton.classList.add("dark-section");
    header.style.borderBottom = "1px solid #000";
  } else {
    header.style.backgroundColor = "#fff";
    header.style.color = "#000";
    menuIcon.style.fill = "#000";
    menuLines.forEach((line) => (line.style.fill = "#000"));
    navUl.style.backgroundColor = "#fff";
    // startProjectButton.style.backgroundColor = "#000";
    // startProjectButton.style.color = "#fff";
    startProjectButton.classList.remove("dark-section");
    startProjectButton.classList.add("light-section");
    header.style.borderBottom = "solid 1px rgba(0, 0, 0, 0.15)";
  }
}

window.addEventListener("scroll", () => {
  const currentThreshold =
    window.innerWidth <= 768 ? THRESHOLD_MOBILE : THRESHOLD_DESKTOP;
  const currentSection = Array.from(sections).find((section) => {
    const sectionTop = section.offsetTop - currentThreshold;
    const sectionHeight = section.clientHeight;
    return (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    );
  });
  if (currentSection) {
    updateColorOnSection(currentSection);
  }
});

const initialSection =
  window.scrollY +
    (window.innerWidth <= 768 ? THRESHOLD_MOBILE : THRESHOLD_DESKTOP) >=
  sections[0].offsetTop
    ? sections[0]
    : null;
if (initialSection) {
  updateColorOnSection(initialSection);
}

const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleMediaQuery(event) {
  if (event.matches) {
    navUl.style.borderBottom = "solid 1px rgba(0, 0, 0, 0.15)";
  } else {
    navUl.style.borderBottom = "none";
  }
}

mediaQuery.addListener(handleMediaQuery);

handleMediaQuery(mediaQuery);

const navLinks = document.querySelectorAll("nav ul a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // If the section exists on the current page
      event.preventDefault(); // Prevent the default action

      const headerHeight =
        window.innerWidth <= 768 ? THRESHOLD_MOBILE : THRESHOLD_DESKTOP;

      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        left: 0,
        behavior: "smooth",
      });
    }
    // If the section does not exist on current page, do nothing and let the browser handle the navigation
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = window.location.href;
  if (currentUrl.includes("#")) {
    const targetId = currentUrl.split("#")[1];
    const targetSection = document.querySelector(`#${targetId}`);

    if (targetSection) {
      const headerHeight =
        window.innerWidth <= 768 ? THRESHOLD_MOBILE : THRESHOLD_DESKTOP;

      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }
});

const heroButton = document.querySelector(".btn-click"); // Be sure to replace ".hero-button-classname" with the actual class name of your hero section button

heroButton.addEventListener("click", (event) => {
  const targetId = event.target.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    event.preventDefault();

    const headerHeight =
      window.innerWidth <= 768 ? THRESHOLD_MOBILE : THRESHOLD_DESKTOP;

    window.scrollTo({
      top: targetSection.offsetTop - headerHeight,
      left: 0,
      behavior: "smooth",
    });
  }
});
