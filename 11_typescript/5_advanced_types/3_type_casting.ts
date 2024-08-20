/*
 * Tür Dönüşümü

 * Örn kullanıcının sepetindeki ürünleri api'dan alıyoruz ancak bu ürünlerin fiyatı api'dan bazen stirng bazen number olarak geliyor. Eğerki uygulamada fonksiyon içerisnde fiyatları number olarak göremek ve ona göre işlem yapmak isteyebiliriz bu noktada tür dönüşümüne başvurulur.
 */

type Product = {
  name: string;
  price: number | string;
};

let product1: Product = {
  name: "Laptop",
  price: 560000,
};

let product2: Product = {
  name: "Phone",
  price: "150000",
};

// tür dönüşümü ile normalde tipi string | number olan price değişkenin 200 saysını çıkarıken ts derleyicsine bunu number olarak varsay diyerek (tür dönüşümü yaparak) hatayı engelledik
let newPrice = (product1.price as number) - 200;

// Örnek - 2
let kisi: unknown = {
  name: "John",
  age: 55,
  adress: "123 main st.",
};

// kişi tipi tanımsız oldupu için name'İne erişirken hata verir
// console.log(kisi.name);

// gerekli tipi tanımlarız
interface IPerson {
  name: string;
  age: number;
  adress: string;
}

// ts'e kişi değşikenin tipini unknown yerine IPerson tipinde varsaymasını istersem sorun çözülür
console.log((kisi as IPerson).name);
