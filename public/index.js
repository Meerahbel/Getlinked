const burger = document.querySelector("#burger");
const burger2 = document.querySelector("#burger2");
const menu = document.querySelector("#menu");

const navButtons = document.querySelectorAll(".nav_buttons");

// hamburger actions
burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    burger2.classList.remove("hidden");
    burger.classList.add("hidden");
  } else {
    menu.classList.add("hidden");
    burger2.classList.add("hidden");
    burger.classList.remove("hidden");
  }
});

// close icon actions
burger2.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    burger2.classList.remove("hidden");
    burger.classList.add("hidden");
  } else {
    menu.classList.add("hidden");
    burger2.classList.add("hidden");
    burger.classList.remove("hidden");
  }
});

// nav buttons actions
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      burger.classList.add("hidden");
    } else {
      menu.classList.add("hidden");
      burger.classList.remove("hidden");
    }
  });
});
