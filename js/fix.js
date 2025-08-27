window.addEventListener("load", function () {
  // 모달창 닫기
  const modal = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modal-close");
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });
  //   스크롤 이벤트
  const topBtn = this.document.querySelector(".top-btn");
  const downBtn = this.document.querySelector(".dwon-btn");
  this.window.addEventListener("scroll", function () {
    // console.log("스크롤시작");
    if (this.document.documentElement.scrollTop > 200) {
      topBtn.style.display = "block";
      downBtn.style.display = "none";
    } else {
      topBtn.style.display = "none";
      downBtn.style.display = "block";
    }
  });
  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
