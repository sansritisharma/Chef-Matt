document.getElementById("toggleMenu").addEventListener("click", function () {
  const openIcon = document.querySelector("#toggleMenu .open");
  const closeIcon = document.querySelector("#toggleMenu .close");
  const sidebar_el = document.querySelector(".side-bar");
  const sidebarImage = document.getElementById("sidebarImage");
  const navBar = document.getElementById("navBar");

  // Toggle visibility of icons
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");

  if (!sidebar_el.classList.contains("w-1/5")) {
    sidebar_el.classList.add("w-1/5"); //expanded state
  } else {
    sidebar_el.classList.remove("w-1/5"); //collapsed
  }
  // Sidebar image
  sidebarImage.classList.toggle("hidden");

  //Navbar toggle
  navBar.classList.toggle("hidden");
  navBar.classList.toggle("flex");
  navBar.classList.toggle("flex-col");
});

// ---------- Initialize Swiper -------------------
const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const totalItems = carouselItems.length;
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * carouselItems[0].offsetWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}
