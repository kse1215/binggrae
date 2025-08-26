window.addEventListener("load", function () {
  AOS.init();
  
  // 상단 top
  // 언어 메뉴 토글
  const langTxt = this.document.querySelector(".lang_txt");
  const langList = this.document.querySelector(".lang-list");
  langTxt.addEventListener("click", function () {
    langList.classList.toggle("toggleOpen");
  });

  // 상단 bottom
  // gnb 메뉴 기능
  const nav = document.querySelector(".gnb");
  const headerBg = this.document.querySelector(".header-bg");
  const depth2Bg = document.querySelector(".depth2-bg");
  const headerBT = this.document.querySelector(".header_bottom");
  // nav에 마우스 엔터 했을때 즉 호버했을때
  nav.addEventListener("mouseenter", function () {
    headerBg.classList.add("active");
    headerBT.classList.add("active");
    depth2Bg.classList.add("active");
  });
  // nav에 마우스 리브 했을때 즉 호버를 안했을때
  nav.addEventListener("mouseleave", function () {
    headerBg.classList.remove("active");
    headerBT.classList.remove("active");
    depth2Bg.classList.remove("active");
  });
  // 햄버거 메뉴 기능
  const hamburger = this.document.querySelector("#hamburger");
  //   햄버거바 클릭시
  hamburger.addEventListener("click", function () {
    hamburger.classList.add("active");
    // hamburger.classList.remove("active");

  });

  // 카테고리 스와이퍼
  const kSlider = new Swiper(".kategorie_slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".kategorie .swiper-button-next",
      prevEl: ".kategorie .swiper-button-prev",
    },
    breakpoints: {
      390: {
        slidesPerView: 2,
        // spaceBetween: 4,
      },
      480: {
        slidesPerView: 3,
        // spaceBetween: 4,
      },
      768: {
        slidesPerView: 4,
        // spaceBetween: 8,
      },
      1200: {
        slidesPerView: 6,
        // spaceBetween: 12,
      },
    },
  });
  // 브랜드 로고 스와이퍼
  const bSlider = new Swiper(".brand_slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".brand-shop .swiper-button-next",
      prevEl: ".brand-shop .swiper-button-prev",
    },
    breakpoints: {
      390: {
        slidesPerView: 2,
        // spaceBetween: 4,
      },
      480: {
        slidesPerView: 3,
        // spaceBetween: 4,
      },
      768: {
        slidesPerView: 4,
        // spaceBetween: 8,
      },
      1200: {
        slidesPerView: 6,
        // spaceBetween: 12,
      },
    },
  });
});
