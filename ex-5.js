function sum(...num) {
  // Start coding here !
  return num.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);

// ให้ Declare ตัว Function ที่ชื่อว่า sum โดยมีรายละเอียดดังนี้

// รับ Parameter เป็นตัวเลขเข้ามากี่ตัวก็ได้
// Return ออกไปเป็นผลรวมของตัวเลขที่ส่งเข้ามาจาก Parameter ทั้งหมด
// มื่อทำการแสดงผลค่าของ result1 ออกมาดูทางหน้าจอด้วย console.log() จะได้ผลลัพธ์เป็น "Result 36"
// เมื่อทำการแสดงผลค่าของ result2 ออกมาดูทางหน้าจอด้วย console.log() จะได้ผลลัพธ์เป็น "Result 10"
