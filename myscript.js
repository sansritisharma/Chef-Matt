const toggleMenu = document.getElementById("toggleMenu");
toggleMenu.addEventListener("click", () => {
  console.log(toggleMenu);
  toggleMenu.classList.toggle("bg-red-900");
});
