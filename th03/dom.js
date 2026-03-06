// 1. Lấy các phần tử cần thiết
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");
const btnRed = document.getElementById("btnRed");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

// 2. Xử lý nút "Chào"
btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Bạn vừa nhấn nút và thay đổi nội dung này bằng JS.";
});

// 3. Xử lý nút "Đổi màu nền"
btnRed.addEventListener("click", function () {
  document.body.style.backgroundColor = "red"; // Đổi thành màu đỏ 
});

// 4. Xử lý khi gõ tên (Sự kiện input)
nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  if (value === "") {
    greeting.textContent = "";
  } else {
    greeting.textContent = "Xin chào, " + value + "! Chúc bạn học tốt JS.";
  }
});