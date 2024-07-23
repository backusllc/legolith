document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".swiper-wrapper");
  if (window.innerWidth > 898) {
    scrollContainer.scrollLeft = 120;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const currentYearElement = document.getElementById("current-year");
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;
});

document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".fade");
  for (let i = targets.length; i--;) {
    let observer = new IntersectionObserver((entries, observer) => {
      for (let j = entries.length; j--;) {
        if (entries[j].isIntersecting) {
          entries[j].target.classList.add("active");
          observer.unobserve(entries[j].target);
        }
      }
    });
    observer.observe(targets[i]);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1.54,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      897: {
        centeredSlides: true,
        slidesPerView: 4.3,
        spaceBetween: 40,
      },
    },
  });
});
