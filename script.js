document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".swiper-wrapper");

  // SP版の場合、JavaScriptを無効にする
  if (window.innerWidth > 898) {
    // 初期スクロール位置を設定（例：スライドの幅 / 2）
    scrollContainer.scrollLeft = 120; // 適切な初期値を設定
  }

});


//最新の年度を表示
document.addEventListener("DOMContentLoaded", () => {
  const currentYearElement = document.getElementById("current-year");
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;
});

//アニメーション
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

//swiper
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      897: {
        centeredSlides: true,
        slidesPerView: 3.5,
        spaceBetween: 24,
      },
    },
  });
});
