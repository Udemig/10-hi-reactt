/*
 * OOP (Object Orianted Programming) Nesne yönelimli programlamma, yazılım geliştirme sürecinde kullanıla bir yaklaşımdır. bu yaklaşım yazılımı nesneler ve bu nesneler arasındaki etkileşimler etrafında yapmayı amaçlar.

 * OOP'nin temel kavramları şunlardır

 * Sınıf (Class)
 * Nesne (Object)
 * Kalıtım (Inheritance)
 
 * OOP'nin temel amacı ise kodun daha anlaşılır, yönetilebilir ve yeniden kullanılabilir olmasını sağlamaktır. Bu yaklaşım büyük ve karmaşık projelerde faydalıdır.  
*/

/*
 * Sınıf (Class): Sınıflar, nesnelerin şablonudur. Bir sınıf, belirli bir türdeki nesneler için ver ve fonksiyonları tanımlar. Örneğin "Araba" sınıfı bir arabanın sahip olabileceği özellikler (renk,marka,model vb) ve davranışlarını (hızlanma,fren yapma vb.) tanımlayabilir.
 */

class OldPhone {
  //* property'ler (özellik'ler)
  telefon_tipi: "entegre" | "ayrılmış" = "entegre";
  tus_takimi: string = "döner";
  govde: string = "yatay";

  //* method'lar
  ahizeAc(): void {
    console.log("ahize açılıyor....");
  }

  numaraCevir(telNum: string) {
    console.log(telNum + " çevriliyor...");
    console.log("telefon çalıyor...");
  }
}

/*
 * Class Kullanımı
 * Bir class'ı tanımlamak bir type veya fonksiyonu tanımlamak gibidir.
 * Bir class'ı kullanmak için yani bir class'tan örnek oluşturmak için new anahtar kelimesini kullanırız.
 * New yardımı ile class'In bir nevi çalışan bir kopyasını oluştururuz
 */

const telefon_1 = new OldPhone();
const telefon_2 = new OldPhone();

telefon_2.tus_takimi = "tuşlu";
telefon_2.govde = "dikey";
telefon_2.telefon_tipi = "ayrılmış";

console.log(telefon_1);
console.log(telefon_2);
