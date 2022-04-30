const heartIcon = document.querySelectorAll(".icon-right");

heartIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
  });
});
