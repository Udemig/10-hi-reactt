/*
 * Function type
 * Typescript'de fonksiyonların tipini tanımlaktan kastımız fonksiyonun aldığı parametrelerin ve return ettiği değerin tipini tanımlamaktan ibarettir
 */

function hesaplama(a: number, b: number): string {
  return "Hesaplama Sonucunuz: " + (a + b);
}

const sonuc = hesaplama(35, 56);

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
function hesapla(a: number): string {
  return "Sonuç: " + a * 2;
}

// 2) İsimsiz Fonksiyon
const noNameFunc = function (a: number): string {
  return "Sonuç: " + a * 2;
};

// 3) Ok Fonksiyon
const arrowFunc = (a: number): string => {
  return "Sonuç: " + a * 2;
};

// 4) Tek Satır Fonksiyon
const singleLine = (a: number): string => "Sonuç:" + a * 2;

// 5) Immediate Call
// Tanımlandığı gibi çağrılan fonksiyonlara verilen isim
// Eğerki dosya içerisinde bir daha kullanılmayacaksa tercih ederiz

// a) normal fonksiyon
const exaFunc = (par: number) => {
  console.log(par + "normal fonksiyon");
};
exaFunc(10);

// b) immediate call
(function (par: number) {
  console.log(par + "immedaite call fonksiyon");
})(10);

// Soru: Fonksiyon tipi tanımlarken kendi oluşturudğumu tipleride kullanabilrmiyiz
// Cevap: Evet

type UserType = {
  name: string;
  surname: string;
  age?: number;
};

let listUser = (user: UserType): UserType[] => {
  return [user, user, user];
};

listUser({
  name: "Fuat",
  surname: "Sarı",
});
