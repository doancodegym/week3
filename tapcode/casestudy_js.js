let nameProduct = Array();
let codeProduct = Array();
let expiryDate = Array();
let amountProduct = Array();
let priceProduct = Array();
function add() {
    let name=document.getElementById("nameProduct").value;
    let code=document.getElementById("codeProduct").value;
    let date=document.getElementById("expiryDate").value;
    let amount=document.getElementById("amountProduct").value;
    let price=document.getElementById("priceProduct").value;
    if (name===""){
        alert("Vui lòng nhập tên sản phẩm");
    }else{
        nameProduct.push(name);
        codeProduct.push(code);
        expiryDate.push(date);
        amountProduct.push(amount);
        priceProduct.push(price);
        document.getElementById("nameProduct").value;
        document.getElementById("codeProduct").value="";
        document.getElementById("expiryDate").value="";
        document.getElementById("priceProduct").value="";
        display();
    }
}
function display() {
    let t="<table border='1'>";
    t = t + "<tr>";
    t = t + "<th>"+"Tên sản phẩm"+"</th>";
    t = t + "<th>"+"Mã sản phẩm"+"</th>";
    t = t + "<th>"+"Hạn sử dụng"+"</th>";
    t = t + "<th>"+"Số lượng"+"</th>";
    t = t + "<th>"+"Đơn giá"+"</th>";
    t = t + "<th>"+"Tùy chọn"+"</th>";
    t = t + "</tr>";
    for (let i=0;i<nameProduct.length;i++){
        t=t+"<tr>";
        t=t+ "<td id ='nameEdit"+i+"'>"+nameProduct[i]+"</td>"+
            "<td id ='codeEdit"+i+"'>" + codeProduct[i] + "</td>" +
            "<td id ='expiryEdit"+i+"'>" + expiryDate[i] + "</td>" +
            "<td id = 'amountEdit"+i+"'>" + amountProduct[i] + "</td>" +
            "<td id = 'priceEdit"+i+"'>"+ priceProduct[i] +"</td>"+
            "<td><button onclick='editProduct("+i+")'>Sửa</button>"+
            "<button onclick='deleteProduct("+i+")'>Xóa</button></td>";
        t=t+"</tr>";
    }
    t=t+"</table>";
    document.getElementById("result").innerHTML=t;
}
function deleteProduct(position) {
    nameProduct.splice(position,1);
    display();
}
function editProduct(position) {
    //bước 1, thêm ô input vào có sẵn dữ liệu cũ
    let editName =  "<input id='productName"+position+"'/>"
    let editCode = "<input id='productCode"+position+"'/>";
    let editExpiry = "<input id='expiryDat"+position+"'/>";
    let editAmount = "<input id='productAmount"+position+"'/>";
    let editPrice = "<input id='productPrice"+position+"'/>" +
        "<button type='button' value='Save' onclick='saveNewName("+position+")'>Save</button>"
    document.getElementById("nameEdit"+position+"").innerHTML =editName;
    document.getElementById("codeEdit"+position+"").innerHTML =editCode;
    document.getElementById("expiryEdit"+position+"").innerHTML =editExpiry;
    document.getElementById("amountEdit"+position+"").innerHTML =editAmount;
    document.getElementById("priceEdit"+position+"").innerHTML =editPrice;
    //Lấy giá trị và gán lại
    // let newNameProduct = prompt("Sửa sản phẩm số "+ position, arr[position]);
    // nameProduct[position] = newNameProduct;
    // display();
}
function saveNewName(position) {
    let newName = document.getElementById("productName"+position+"").value;
    let newCode = document.getElementById("productCode"+position+"").value;
    let newDate = document.getElementById("expiryDat"+position+"").value;
    let newAmount = document.getElementById("productAmount"+position+"").value;
    let newPrice = document.getElementById("productPrice"+position+"").value;
    nameProduct[position] = newName;
    codeProduct[position] = newCode;
    expiryDate[position] = newDate;
    amountProduct[position] = newAmount;
    priceProduct[position] = newPrice;
    display();
}