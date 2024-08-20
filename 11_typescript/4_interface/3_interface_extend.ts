/*
 * Interface type'larda da olduğu gibi farklı bir/birkaç interface'İn özelliklerini miras alabilir. Bunu extends anahtar kelimesi ile yapar. Sınıflardan farklı olarak istersek birden fazla interface'i tek seferde miras alabiliyoruz
 */

interface EvEsyasi {
  isim: string;
  fiyat: number;
}

interface Mobilya extends EvEsyasi {
  renk: string;
}

const masa: Mobilya = {
  isim: "Yemek Masası",
  fiyat: 20000,
  renk: "Sİyah",
};

// farklı bir interface tanımlayalım
interface Elektronik {
  marka: string;
  garantiSuresi: number;
  şarj?: number;
}

// birdan fazla interface'i miras alama
interface Urun extends Mobilya, Elektronik {
  id: string;
}

// interface'i kullanalım
const tv: Urun = {
  marka: "LG",
  isim: "Smart TV",
  garantiSuresi: 2,
  renk: "Beyaz",
  fiyat: 38999,
  id: "213fdsfds",
  şarj: 100,
};

// SORU: İlk olarak 2 farklı interface oluşturun.
// Ardından 3. bir interface oluşturup ilk 2 interface'i miras olarak alıp genişletin.
// Son olarak bu interface'i 1 nesnenin tipini tanımlarken kullanın

// CEVAP - 1
interface Deterjan {
  marka: string;
  kg: number;
  yikamaSayısı: number;
}

interface DeterjanBulasik {
  adet: number;
  sonKullTarihi: number;
}

interface FixDeterjan extends Deterjan, DeterjanBulasik {
  uretimYili: number;
}

const Deterjanım: FixDeterjan = {
  marka: " Fairy",
  kg: 5,
  yikamaSayısı: 50,
  adet: 50,
  sonKullTarihi: 2027,
  uretimYili: 2023,
};

// CEVAP - 2
interface UrunAdi {
  marka: string;
  model: string;
}

interface UrunBilgi {
  guc: number;
  telSayisi: number;
}

interface Enstrumental extends UrunAdi, UrunBilgi {
  isAcousticGuitar: boolean;
}

const myGitar: Enstrumental = {
  marka: "Fender",
  model: "Custom",
  guc: 15,
  telSayisi: 6,
  isAcousticGuitar: false,
};

// CEVAP - 3

// İlk olarak 2 farklı interface tanımlıyoruz
interface MotorluArac {
  marka: string;
  model: string;
  motorHacmi: number;
}

interface ElektrikliArac {
  bataryaKapasitesi: number;
  sarjSuresi: number;
}

// 3. bir interface oluşturup ilk 2 interface'i miras alıyoruz
interface HibritArac extends MotorluArac, ElektrikliArac {
  hibritModu: boolean;
}

// Bu interface'i kullanarak bir nesne tanımlıyoruz
const hibritAraba: HibritArac = {
  marka: "Toyota",
  model: "Prius",
  motorHacmi: 1.8,
  bataryaKapasitesi: 8.8, // kWh cinsinden
  sarjSuresi: 2, // Saat cinsinden
  hibritModu: true,
};

console.log(hibritAraba);

// CEVAP - 4
interface giyim {
  marka: string;
  model: string;
  beden: string;
  kumaş: string;
}

interface ayakkabı {
  marka: string;
  model: string;
  numara: number;
}

interface Ürün extends giyim, ayakkabı {
  uretimYili: number;
}

const kaban: Ürün = {
  marka: "Vakko",
  model: "Kaşe",
  beden: "xl",
  kumaş: "pamuklu",
  numara: 3,
  uretimYili: 2024,
};

// CEVAP - 5
interface Bilgisayar {
  model: string;
  display: number;
  grafikKart: string;
}

interface Telefon {
  garantiSuresi: number;
  fiyat: number;
}

interface teknolojikAletler extends Bilgisayar, Telefon {
  id: number;
}

const aletler: teknolojikAletler = {
  model: "HP Pro Book",
  display: 35,
  grafikKart: "Intel HD Graphics 620",
  garantiSuresi: 2,
  fiyat: 40.0,
  id: 3,
};

console.log(aletler);

// CEVAP - 6
interface stok {
  urun_id: number;
  urun: string;
}

interface satis {
  urun_adet: number;
  satis_fiyat: number;
}

interface urun extends stok, satis {
  tarih: number;
}

const kasa: urun = {
  urun_id: 123,
  urun: "makarna",
  urun_adet: 10,
  satis_fiyat: 10,
  tarih: 2024,
};
