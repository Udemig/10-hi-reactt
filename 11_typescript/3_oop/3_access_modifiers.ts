/*
 * Access Modifiers - Erişim Belirteçleri

 * Class elemenları ile hassas bilgiler tutucağımız zaman bu bilgilerin class'In dışarısından erişilip erişilmeyeceğini belirtmek isteriz.

 * Örneğin kredi kartı bilgilerini tutan bir class olsun bu class'ın tutucağı bilgileri kod içerisnde her yerde kullanılmasını önlemek isteyebilir.

 * 3 adet erişim belirteci vardır.

 * public: hem class dışarısında hemde class'ı miras alan diğer class'lardan erişilebilir
 * protected: class'dışarısında erişilemez ama class'ı miras alab diğer class'lardan erişilebilir.
 * private: hem class dışarısından hem de class'ı miras alan diğer class'lardan erişilemez
*/

// PUBLIC

class Arac {
  public marka: string = "Honda";

  tanit() {
    console.log("Bu arabanın markası: ", this.marka); // tanımlandığı class içerisinden eriştik
  }
}

class Motor extends Arac {
  calistir() {
    console.log(this.marka + " motoru çalıştı"); // miras alındığı class içerisinden eriştik
  }
}

const honda = new Arac();

console.log(honda.marka); // class'ın dışarısnda eriştik

// PROTECTED
class EvcilHayvan {
  protected ad: string = "Boncuk";
}

class Kopek extends EvcilHayvan {
  havla() {
    console.log(this.ad + " havlıyor");
  }
}

const kopek = new Kopek();
// kopek.ad; // DIŞARIDAN ERİŞİM YOK !

// PRIVATE
class OzelPersonel {
  private isim: string = "Mahmut";

  selamla() {
    console.log("merhaba " + this.isim);
  }
}

class GumrukPersoneli extends OzelPersonel {
  tanit() {
    // this.isim // miras alınan class'ta erişime kapalı
  }
}

const kisi = new GumrukPersoneli();
// kisi.isim // dışarında erişime kapalı

/*
 * NOT: Erişim belirteçleri aynı bütün ts'e özel olan kodlarda olduğu gibi kodu derlediğimizde ortadan kalkar. Yani berliteçler sadece geliştirme aşamasını daha güvenli hale getirmek için kullanılır proje yayınladığında bir işlevi olmaz


 ERİŞİM             DIŞARIDAN             MİRAS ALAN CLASS             TANIMLANDIĞI CLASS

 PUBLIC                 💥                         💥                             💥

 PROTECTED                                         💥                             💥

 PRIVATE                                                                          💥
 */

let isim: string = "ahmet";
