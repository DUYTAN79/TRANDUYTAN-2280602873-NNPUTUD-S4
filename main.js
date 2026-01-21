// CÂU 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// CÂU 2: Khởi tạo mảng products ít nhất 6 sản phẩm, 2 danh mục
const products = [
    new Product(1, "iPhone 15 Pro", 28000000, 10, "Electronics", true),
    new Product(2, "MacBook M3", 45000000, 5, "Electronics", true),
    new Product(3, "Sony Headphones", 8000000, 0, "Accessories", true),
    new Product(4, "Apple Watch Ultra", 21000000, 15, "Accessories", false),
    new Product(5, "Samsung S24 Ultra", 31000000, 8, "Electronics", true),
    new Product(6, "Logitech Mouse", 2500000, 20, "Accessories", true)
];

// CÂU 3: Tạo mảng mới chỉ chứa name, price
const cau3 = products.map(p => ({ name: p.name, price: p.price }));

// CÂU 4: Lọc ra các sản phẩm còn hàng (quantity > 0)
const cau4 = products.filter(p => p.quantity > 0);

// CÂU 5: Kiểm tra có ít nhất một sản phẩm giá > 30.000.000
const cau5 = products.some(p => p.price > 30000000);

// CÂU 6: Kiểm tra tất cả "Accessories" có đang bán không (isAvailable = true)
const cau6 = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

// CÂU 7: Tính tổng giá trị kho hàng (price * quantity)
const cau7 = products.reduce((total, p) => total + (p.price * p.quantity), 0);

// CÂU 8: Dùng for...of Duyệt mảng và tạo chuỗi in ra
let cau8Result = "";
for (const p of products) {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    cau8Result += `${p.name} - ${p.category} - ${status}\n`;
}

// CÂU 9: Dùng for...in cho sản phẩm đầu tiên
let cau9Result = "";
const firstP = products[0];
for (const key in firstP) {
    cau9Result += `${key}: ${firstP[key]}\n`;
}

// CÂU 10: Lấy danh sách tên sản phẩm đang bán và còn hàng
const cau10 = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

// --- HÀM ĐỔ DỮ LIỆU RA GIAO DIỆN HTML ---
function render() {
    document.getElementById('res1-2').innerText = JSON.stringify(products, null, 2);
    document.getElementById('res3').innerText = JSON.stringify(cau3, null, 2);
    document.getElementById('res4').innerText = JSON.stringify(cau4, null, 2);
    document.getElementById('res5').innerText = cau5 ? "=> Có ít nhất một sản phẩm trên 30tr" : "=> Không có sản phẩm nào trên 30tr";
    document.getElementById('res6').innerText = cau6 ? "=> Tất cả Accessories đang bán" : "=> Có Accessory đang ngừng bán";
    document.getElementById('res7').innerText = "=> Tổng giá trị: " + cau7.toLocaleString() + " VND";
    document.getElementById('res8').innerText = cau8Result;
    document.getElementById('res9').innerText = cau9Result;
    document.getElementById('res10').innerText = JSON.stringify(cau10, null, 2);
}

// Chạy hàm render khi trang web load xong
window.onload = render;