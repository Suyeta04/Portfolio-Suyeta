const hamburgerButton = document.querySelector(".hamburger-button");
const menuOptions = document.querySelector(".menu-options");

hamburgerButton.addEventListener("click", () => {
  menuOptions.classList.toggle("open");

  const hamburgerIcon = hamburgerButton.querySelector(".hamburger-icon");
  hamburgerIcon.classList.toggle("open");
});
