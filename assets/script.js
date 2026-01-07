const buttons = document.querySelectorAll(".read-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.classList.toggle("active");

    button.textContent = card.classList.contains("active")
      ? "Ler menos"
      : "Ler mais";
  });
});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-bar");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
