/* Created by Tivotal */

let menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");

  if (menuBtn.classList.contains("fa-bars")) {
    menuBtn.classList.replace("fa-bars", "fa-times");
  } else {
    menuBtn.classList.replace("fa-times", "fa-bars");
  }
});
