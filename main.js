// Tính Lương nhân viên

let btnLuong = document.getElementById("btn_luong");
btnLuong.onclick = function () {
    let txtLuong = document.getElementById("txt_luong").value;
    let txtSongay = document.getElementById("txt_songay").value;

    let tongLuong = txtLuong * txtSongay;
    document.getElementById("kq_luong").innerHTML = "Tổng Tiền Lương Là: " + tongLuong;

};

//Quy đổi ngoại tệ
let btnQuydoi = document.getElementById("btn_quydoi");
btnQuydoi.onclick = function () {
    let txtGia = document.getElementById("txt_gia").value;
    let txtSotien = document.getElementById("txt_sotien").value;

    let tongTien = txtGia * txtSotien;
    document.getElementById("kq_quydoi").innerHTML = "Số Tiền Quy Đổi là: " + tongTien;
};

//Tính dien tích chu vi HCN
let btnHCN = document.getElementById("btn_hcn");
btnHCN.onclick = function () {
    let txtDai = document.getElementById("txt_dai").value;
    let txtRong = document.getElementById("txt_rong").value;

    txtDai = Number(txtDai);
    txtRong = Number(txtRong);

    let dienTich = txtDai * txtRong;
    let chuVi = (txtDai + txtRong) * 2;

    document.getElementById("kq_hcn").innerHTML = "Diện tích HCN là: " + dienTich + "  ------Chu vi HCN là: " + chuVi;


};

//Tính trung bình 5 số
let btnTrungbinh = document.getElementById("btn_trungbinh");
btnTrungbinh.onclick = function () {
    let txtSo1 = document.getElementById("txt_so1").value;
    let txtSo2 = document.getElementById("txt_so2").value;
    let txtSo3 = document.getElementById("txt_so3").value;
    let txtSo4 = document.getElementById("txt_so4").value;
    let txtSo5 = document.getElementById("txt_so5").value;

    txtSo1 = Number(txtSo1);
    txtSo2 = Number(txtSo2);
    txtSo3 = Number(txtSo3);
    txtSo4 = Number(txtSo4);
    txtSo5 = Number(txtSo5);

    let tinhTrungbinh = (txtSo1 + txtSo2 + txtSo3 + txtSo4 + txtSo5) / 5;
    document.getElementById("kq_trungbinh").innerHTML = "Giá trị trung bình của 5 số: " + tinhTrungbinh;
};
//Tinh tổng hai ký số
let btnKyso = document.getElementById("btn_kyso");
btnKyso.onclick = function () {
    let txtKyso = document.getElementById("txt_kyso").value;

    let nguyen = Math.floor(txtKyso / 10);
    let le = txtKyso % 10;
    let tongKyso = nguyen + le;

    document.getElementById("kq_kyso").innerHTML = "Tổng hai ký tự số là: " + tongKyso;
};
