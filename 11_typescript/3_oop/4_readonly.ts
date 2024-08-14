/*
 * Readonly - Salt Okunur

 * Typescript'de bir sınıfın veya nesnenin içerisndeki bir özelliğin sadece okunabilir olmasını sağlar.

 * Readonly ile tanımladığımız bir özelliğe değer ataması:
 * * sınıflarda sadedce constructor kod bloğunda yapılabilir.
 * * nesnelerde ise sadece özelliği tanımlarken yapılabilir.

*/

type Person = {
  name: string;
  surname: string;
  readonly tc_no: number;
};

const kisi: Person = {
  name: "Mahmut",
  surname: "Yanık",
  tc_no: 1112223344,
};

kisi.name = "Fırat"; //? DEĞİŞTİRDİK
kisi.surname = "Kaya"; //? DEĞİŞTİRDİK
// kisi.tc_no = 112312312313; //! DEĞİŞTİRİLEMEZ

console.log(kisi.tc_no); //? ERİŞİME BİR ENGEL YOK
//
//
//
//
// CLASS'LARDA READONLY
class Kitap {
  public isim: string;
  protected sayfa: number;
  public readonly yazar: string = "Orhan Pamuk";

  constructor(yeni_isim: string, yeni_sayfa: number, yeni_yazar: string) {
    this.isim = yeni_isim;
    this.sayfa = yeni_sayfa;
    this.yazar = yeni_yazar; // constructor ile değiştribilir
  }
}

const kitap = new Kitap("Hobbit", 500, "Tolkien");

console.log(kitap);

// kitap.yazar = "Deneme"; // DEĞİŞTİRİLEMEZ

// * SORU:
// * Bir class tanımlayın ve class'tan bir örnek oluşturun.
// * En az 4 özelliğe sahip olsun
// * En az 1 readonly özelliğe sahip olsun
// * Özellikleri tanımlarken erişim belirteçleri kullanın

// CEVAP - 1
class Menu {
  public firmaAdi: string;
  public firmaYeri: string;
  protected kurulusYili: number;
  public readonly QrCodee: string = "219701";

  constructor(
    yeni_firmaAdi: string,
    yeni_firmaYeri: string,
    yeni_kurulusYili: number,
    yeni_QrCodee: string
  ) {
    this.firmaAdi = yeni_firmaAdi;
    this.firmaYeri = yeni_firmaYeri;
    this.kurulusYili = yeni_kurulusYili;
    this.QrCodee = yeni_QrCodee;
  }
}

const menu = new Menu("Karahisar", "Afyon", 2021, "882099");

console.log(menu);

// CEVAP - 2
class Laptop {
  public isim: string;
  protected pilomru: number;
  private readonly model: string;

  constructor(isim: string, model: string, pilomru: number) {
    this.isim = isim;
    this.model = model;
    this.pilomru = pilomru;
  }
}
const myLaptop = new Laptop("Dell", "Alienware", 80);

// CEVAP - 3
class Kayit {
  public oNo: number;
  public adi: string;
  public bolum: string;
  public readonly fakulte: string = "mühendislik";

  constructor(
    yeni_ono: number,
    yeni_adi: string,
    yeni_bolum: string,
    yeni_fakulte: string
  ) {
    this.oNo = yeni_ono;
    this.adi = yeni_adi;
    this.bolum = yeni_bolum;
    this.fakulte = yeni_fakulte;
  }
}

const yeniKayit = new Kayit(1234, "ali", "bilgisayar", "BİLGİSAYAR FK");

console.log(yeniKayit);
