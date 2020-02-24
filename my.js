let money=parseInt(prompt('Nhap vao so tien gui ban dau (Trieu VND)'));
let rate=parseInt(prompt('Nhap vao lai suat (%/nam)'));
let saving_month=parseInt(prompt('Nhap vao so thang gui tiet kiem'));
let saving_day=saving_month*30;

let bank_interest=money*(rate/100)*saving_day/360;

alert('So tien lai sau '+ saving_month +' thang la '+(bank_interest)+' Trieu VND');