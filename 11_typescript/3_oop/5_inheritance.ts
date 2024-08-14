/*
 * Inheritance (Kalıtım | Miras)

 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasına izin verir.

 * Bu işlem kodun tekrar kullanılabilriğini arttırır ve kod organizasyonunu geliştirir. Miras her zzaman "ana sınıf"| "üst sınıf" tan türetilmiş olan alt sınıflar arasında gerçekleşir.

 * Alt sınıf (Derived Class | Child Class), bir üst sınıftan (Parent Class) miras olarak özelliklerini ve davranışlarını alabilir.
 */

// Parent Class
class GeometrikSekil {
  public ad: string;

  constructor(ad: string) {
    this.ad = ad;
  }

  tanim() {
    console.log(`Bu bir ${this.ad} şeklidir.`);
  }
}

// Derived Class - Constructor Yok
class Dikdortgen extends GeometrikSekil {
  private uzunluk = 40;
  private genislik = 80;
}

const sekil1 = new Dikdortgen("Dikdörtgen");

// Derived Class - Constructor Var
class Daire extends GeometrikSekil {
  private yaricap: number = 4;

  constructor(ad: string, yaricap: number) {
    // super: parent class'ın constructor'ına değer göndermeye yarar
    super(ad);
    this.yaricap = yaricap;
  }
}

const sekil2 = new Daire("Daire", 10);

/*
 *  Parent class'ın constur'ı varsa  ve Child class'ta constructor tanımlandıysa super methodu ile parent class'ın constructor'ına değer göndermek zorundayız
 */

// Parent
class Arac {
  public marka: string;
  public model: string;

  constructor(marka: string, model: string) {
    this.marka = marka;
    this.model = model;
  }

  calistir() {
    console.log("Araca giriş yapılıyor");
  }
}

// Child
type Fuel = "benzin" | "dizel" | "elektrik";

class Araba extends Arac {
  // miras alınan class'a yeni özellik ekledik
  private yakit: Fuel;

  constructor(marka: string, model: string, yakit: Fuel) {
    // parent class'ın constructor'ına istediği değerleri gönderdik
    super(marka, model);

    this.yakit = yakit;
  }

  // miras alınan class'a yeni method ekle
  vitesDegis(articakMi: boolean) {
    console.log(articakMi ? "Vites arttılıyor" : "Vites düşürülüyor..");
  }

  // miras olarak alınan methodun görevini değiştirme > Method Overriding
  calistir(): void {
    super.calistir(); // parent class'tan gelen çalıştır methodunu tetikler
    console.log("Kontak çevriliyor...");
    console.log("Gaz veriliyor...");
  }
}

const porsche = new Araba("Porsche", "911", "benzin");
console.log(porsche);
porsche.calistir();
porsche.vitesDegis(true);

// Bir class aynı anda iki farklı class'ı miras alamaz ama miras alma olayı birden fazla kere gerçekleşebilir.

class Human {
  eye_color: string = "";
}

class Father extends Human {
  eye_color = "Kahverengi";
}

class Mother extends Human {
  eye_color = "Mavi";
}

class Son extends Father {}

const son = new Son();
console.log(son.eye_color);

