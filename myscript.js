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
let appendNumber = 10;
let prependNumber = 1;
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  virtual: {
    slides: (function () {
      const slides = [];
      for (var i = 0; i < 10; i += 1) {
        slides.push("Slide " + (i + 1));
      }
      return slides;
    })(),
  },
});

document.querySelector(".slide-1").addEventListener("click", function (e) {
  e.preventDefault();
  swiper.slideTo(0, 0);
});

document.querySelector(".slide-10").addEventListener("click", function (e) {
  e.preventDefault();
  swiper.slideTo(9, 0);
});

document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.virtual.prependSlide([
      "Slide " + --prependNumber,
      "Slide " + --prependNumber,
    ]);
  });
