// Lấy giá trị của tham số từ URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

//Hiện thị trang digital-cv theo từng trường hợp
if (name === `cv`) {
  cv.style.display = `block`;
  machine.style.display = `none`;
  sell.style.display = `none`;
  document.title = `CV Cá nhân`;
} else if (name === `machine`) {
  cv.style.display = `none`;
  machine.style.display = `block`;
  sell.style.display = `none`;
  document.title = `Web theo dõi máy`;
} else if (name === `sell`) {
  cv.style.display = `none`;
  machine.style.display = `none`;
  sell.style.display = `block`;
  document.title = `Web bán hàng`;
}
