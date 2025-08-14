window.addEventListener("load", function () {
  // 언어 메뉴 토글
  const langTxt = this.document.querySelector(".lang_txt");
  const langList = this.document.querySelector(".lang-list");
  langTxt.addEventListener("click", function () {
    langList.classList.toggle("toggleOpen");
  });
});
