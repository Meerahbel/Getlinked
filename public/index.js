const burger = document.querySelector("#burger");
const burger2 = document.querySelector("#burger2");
const menu = document.querySelector("#menu");

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
