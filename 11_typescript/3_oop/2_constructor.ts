/*
 * Constructor: İnşa Etme Methodu
 * Constructor methodu oluşturulan nesnenin özellikklernini değerlerini dışarıdan almaya yarar.
 * Constructor sayesinde bir class'tan oluşturlan bütün nesneler birbirinin bir kopyası olmaz.
 * Constructor new anahtar kelimesi ile class çağrıldığında ilk çalışan fonksiyondur.
 */

class Person {
  //1) sınıfın özelliklerini belirle
  ad: string;
  soyad: string;
  yas: number;

  //2) Constructor ile dışarıdan bu özelliklere değer atayalım
  constructor(yeni_ad: string, yeni_soyad: string, yeni_yas: number) {
    this.ad = yeni_ad;
    this.soyad = yeni_soyad;
    this.yas = yeni_yas;
  }

  kendiniTanit() {
    console.log(
      `Selam, ben ${this.ad} ${this.soyad} ve ${this.yas} yaşındayım.`
    );
  }
}
// sınıftan bir örnek oluşturuken constructor kod bloğunda tanımlanan parametreler değer gönderilmeli
const kisi1 = new Person("Burak", "Yıldız", 34);
const kisi2 = new Person("Kadir", "Sarı", 20);
console.log(kisi1.kendiniTanit());
console.log(kisi2.kendiniTanit());

//* SORU: Bir teknolojik/ev aleti için class yapısıs oluşturun.
//* Bu class'tan oluşturucağınız nesnenin değerlerini constructor yadımıyla dışarıdan alın.
//* Class en az 4 özellik ve 1 methoda sahip olsun.

// CEVAP - 1
class camasirMakinesi {
  marka: string;
  model: number;
  otomatik: boolean;

  constructor(
    yeni_marka: string,
    yeni_model: number,
    yeni_digital: boolean
  ) {
    this.marka = yeni_marka;
    this.model = yeni_model;
    this.otomatik = yeni_digital;
  }
  yeniMakina() {
    console.log(
      `Bu bir, ${this.marka} ${this.model} ve ${
        this.otomatik ? "otomaik" : "manuel"
      } çamaşır makinasıdır.`
    );
  }
}
const makina1 = new camasirMakinesi("Bosch", 2024, true);
const makina2 = new camasirMakinesi("Beko", 2023, false);
makina1.yeniMakina();
makina2.yeniMakina();

// CEVAP - 2
class malzeme {
  adi: string;
  islev: string;
  yil: number;

  constructor(yeni_ad: string, yeni_islev: string, yeni_yil: number) {
    this.adi = yeni_ad;
    this.islev = yeni_islev;
    this.yil = yeni_yil;
  }

  urun() {
    console.log(
      `Yeni ürün:${this.adi} ${this.islev} ${this.yil} temin edilmiştir.`
    );
  }
}

const urun1 = new malzeme("ütü", "ütüleme", 2024);
const urun2 = new malzeme("klima", "soğutma", 2022);

urun1.urun();
urun2.urun();

// CEVAP - 3
class Robot {
  ad: string;
  renk: string;
  model: number;
  turboMu: boolean;

  constructor(
    yeni_ad: string,
    yeni_renk: string,
    yeni_model: number,
    yeni_turboMu: boolean
  ) {
    this.ad = yeni_ad;
    this.renk = yeni_renk;
    this.model = yeni_model;
    this.turboMu = yeni_turboMu;
  }

  robotuCalistir(): void {
    console.log("robot çalışıyor...");
  }
}

const robot1 = new Robot("Philips", "siyah", 14523, true);
const robot2 = new Robot("Conga", "beyaz", 456278, false);
const robot3 = new Robot("Zigma", "beyaz", 124579, true);

robot1.robotuCalistir();
robot2.robotuCalistir();
robot3.robotuCalistir();
console.log(robot1, robot2, robot3);

// cevap - 5
class TV {
  marka: string;
  model: string;
  ekran: number;
  çözünürlük: string;

  constructor(
    yeni_marka: string,
    yeni_model: string,
    yeni_ekran: number,
    yeni_çözünürlük: string
  ) {
    this.marka = yeni_marka;
    this.model = yeni_model;
    this.ekran = yeni_ekran;
    this.çözünürlük = yeni_çözünürlük;
  }

  kanalDegis() {
    console.log("sonraki kanala geçildi");
  }
}

const tv1 = new TV("philips", "UHD", 128, "4K");
const tv2 = new TV("LG", "LED", 256, "4K");

console.log(tv1);
console.log(tv2);
