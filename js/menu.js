const openMenu = document.querySelector("#openMenu");
const menu = document.querySelector("#menu");

openMenu.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
