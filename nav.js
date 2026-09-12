document.getElementById("year").textContent = new Date().getFullYear();

var navToggle = document.getElementById("navToggle");
if (navToggle) {
  navToggle.addEventListener("click", function () {
    var open = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}
