window.addEventListener("load", function () {
  // 언어 메뉴 토글
  const langTxt = this.document.querySelector(".lang_txt");
  const langList = this.document.querySelector(".lang-list");
  langTxt.addEventListener("click", function () {
    langList.classList.toggle("toggleOpen");
  });
  // 햄버거 메뉴 기능
  const hamburger = this.document.querySelector("#hamburger");
  //   햄버거바 클릭시
  hamburger.addEventListener("click", function () {
    hamburger.classList.add("active");
  });
});
