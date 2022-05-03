const heartIcon = document.querySelectorAll(".icon-right");
const hamburgerMenu = document.querySelector(".toggle");
const headerMenu = document.querySelector(".header__menu");
const hamburger = document.querySelector(".hamburger");
const topButton = document.querySelector(".top-button");

heartIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
  });
});

hamburgerMenu.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
  hamburger.classList.toggle("opened");
});

window.addEventListener("scroll", () => {
  if (scrollY > 600) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove("active");
  }
});
