/*
 * Static kelimesi bir sınıfın örneği olmadan özelliğin doğrudan sınıfa ait olduğu anlamına gelir.
 * Direkt sınıf üzerinden erişilebilen özellik ve methodlar tanımlayabiliyoruz
 */

//* Static Method
class Matematik {
  topla(x: number, y: number): void {
    console.log(x + y);
  }

  static carp(a: number, b: number): void {
    console.log(a * b);
  }
}

// static olan methoda erişme
Matematik.carp(30, 40);

// static olmayan methoda erişme
const math = new Matematik();
math.topla(50, 70);

//* STATIC Özellikler
class Ogrenci {
  static ogrenciSayisi: number = 0;
  public isim: string;

  constructor(isim: string) {
    this.isim = isim;

    // constructor her çalıştığında yani her öğrenci oluşturulduğunda static değişkeni 1 arttır
    Ogrenci.ogrenciSayisi++;
  }
}

console.log(Ogrenci.ogrenciSayisi); // 0

// console.log(Ogrenci.isim) // HATA VERİR

const o1 = new Ogrenci("ali");
const o2 = new Ogrenci("ayşe");
const o3 = new Ogrenci("ayla");
const o4 = new Ogrenci("faruk");
o1.isim;

console.log(Ogrenci.ogrenciSayisi); // 4
