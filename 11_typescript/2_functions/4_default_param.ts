/*
 * Default param (Varsayılan Değere Sahip Parametre)
 
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmasını istemeyiz bunu yerine vasyılan bir değere sahio olması istenebilir.
*/

function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

selamVer("Ali");
selamVer();

// Örnek
const kdvHesapla = (fiyat: number, kdv: number = 18) => {
  return fiyat + (kdv / 100) * fiyat;
};

console.log("kdv'li fiyat: ", kdvHesapla(200));
console.log("kdv'li fiyat: ", kdvHesapla(200, 35));
