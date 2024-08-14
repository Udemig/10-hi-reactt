/*
 * Function type
 * Typescript'de fonksiyonların tipini tanımlaktan kastımız fonksiyonun aldığı parametrelerin ve return ettiği değerin tipini tanımlamaktan ibarettir
 */
function hesaplama(a, b) {
    return "Hesaplama Sonucunuz: " + (a + b);
}
var sonuc = hesaplama(35, 56);
console.log(sonuc);
/*
 * Javascript Fonksiyon Türleri
 * 1- İsimli Fonksiyon
 * 2- İsimsiz Fonksiyon
 * 3- Ok Fonksiyon
 * 4- Tek Satır Fonksiyon
 * 5- Immediate Call (Acil Çağrılan) Fonksiyon
 */
// 1) İsimli Fonksiyon
function hesapla(a) {
    return "Sonuç: " + a * 2;
}
// 2) İsimsiz Fonksiyon
var noNameFunc = function (a) {
    return "Sonuç: " + a * 2;
};
// 3) Ok Fonksiyon
var arrowFunc = function (a) {
    return "Sonuç: " + a * 2;
};
// 4) Tek Satır Fonksiyon
var singleLine = function (a) { return "Sonuç:" + a * 2; };
// 5) Immediate Call
// Tanımlandığı gibi çağrılan fonksiyonlara verilen isim
// Eğerki dosya içerisinde bir daha kullanılmayacaksa tercih ederiz
// a) normal fonksiyon
var exaFunc = function (par) {
    console.log(par + "normal fonksiyon");
};
exaFunc(10);
// b) immediate call
(function (par) {
    console.log(par + "immedaite call fonksiyon");
})(10);
