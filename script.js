function handleSubmit() {
  //Lấy thông tin email nhập vô
  const emailValue = document.getElementById(`email`).value.toLocaleLowerCase();
  //lấy element của thẻ p để hiển thị lỗi
  const errorEmail = document.getElementById(`error-email`);
  //quy định định dạng của mail nhập vô
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //Kiểm tra xem giá trị mail nhập vô có đúng quy định hay không
  const check = emailValue.match(regex);
  // lấy phần thông tin user
  const sectionContent = document.querySelector(`.section-content`);
  //lấy element để kiểm soát nút submit
  const submitControl = document.querySelector(`.submit-email`);
  if (check) {
    sectionContent.style.display = `block`;
    submitControl.style.display = `none`;
    errorEmail.innerHTML = ``;
  } else {
    errorEmail.innerHTML = `Vui lòng nhập đúng email`;
  }
}
//di chuyển chuột vào hiện thị nút view more
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(`.view-more`);
  viewMore.style.display = `block`;
}
//di chuyển ra ngoài ẩn nút viewmore
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(`.view-more`);
  viewMore.style.display = `none`;
}

// Ấn vào nút view more để hiện thị nội dung, ấn less more để ẩn nội dung
function handleViewMore(element) {
  const parentElement = element.closest(`.parent`);
  const viewMore = parentElement.querySelector(`.view-more`);
  const sectionContent = parentElement.querySelectorAll(`.section-content`);
  sectionContent.forEach((element) => {
    if (element.style.display === `none`) {
      element.style.display = `block`;
      viewMore.innerHTML = `View less`;
    } else {
      element.style.display = `none`;
      viewMore.innerHTML = `View more`;
    }
  });
}
