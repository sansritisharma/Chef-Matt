// const toggleMenu = document.getElementById("toggleMenu");
// toggleMenu.addEventListener("click", () => {
//   console.log(toggleMenu);
//   toggleMenu.classList.toggle("hamburger-toggle");
// });

var firstLoad = true;
const toggleMenu = document.getElementById("toggleMenu");
const sidebar_el = document.querySelector(".side-bar");

function toggleIcon() {
  toggleMenu.classList.toggle("hamburger-toggle");
}

toggleMenu.addEventListener("click", () => {
  console.log("clicked");
  toggleIcon();
  if (!sidebar_el.classList.contains("w-1/5")) {
    sidebar_el.classList.add("w-1/5"); //expanded state
  } else {
    sidebar_el.classList.remove("w-1/5"); //collapsed
  }
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
