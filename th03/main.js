
console.log("Hello from JavaScript!");

let name = "Viet";
let yearOfBirth = 2004;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");
// Tính điểm trung bình
function tinhDiemTrungBinh(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}

// Xếp loại dựa trên điểm
function xepLoai(avg) {
  if (avg >= 8) return "Giỏi";
  if (avg >= 6.5) return "Khá";
  if (avg >= 5) return "Trung bình";
  return "Yếu";
}

// Chạy thử trong Console
let diemTB = tinhDiemTrungBinh(8, 7, 9);
console.log("Điểm TB:", diemTB.toFixed(2), "- Xếp loại:", xepLoai(diemTB));