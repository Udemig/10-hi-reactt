/*
 * void: bir fonksiyonun bir şey döndürmediğini ifade etmek için kullanılır.

 * void varsa retyurn satırı sadece fonksiyonu durdurma amacıyla kullanılır yani değer döndürmez
 */

function selamla(): void {
  console.log("selam, nasılsın?");

  return; // fonksiyonu durdurma amaçlı kullanılabilir
}

/*
 * Never: hata üreten fonksiyonlarda kullanılır.
 * Örneğin bir fonksiyonun hata fırlatma durumu varsa return tipi olarak never kullanılır.
 * "Hiç bir zaman bu noktaya ulaşılamaz" durumunu ifader.
 */

function hataFonksiyonu(message: string): never {
  throw new Error(message);
}

try {
  hataFonksiyonu("404 not found");
} catch (err) {
  console.log("Fonksiyon görevini tamalayanmadan hat fırlattı:", err);
}

/*
 * Sonuç olarak:
 * fonksiyonun return tipi
 * any ise fonksiyon herhangi bir türdde veri return edebilir
 * void ise hiç bir değeri return edemez
 * never ise bir hata fırlatır yani return satırı asla çalışmaz
 */
