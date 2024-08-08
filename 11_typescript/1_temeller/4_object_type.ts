/*
 * Object Type:
 * Normal şartlarda ts'de bir object type mevcuttur. Object type'ın ucu çok açık bir tip olduğu için kullanılması tercih edilmez
 
 * JS, nesne tabanlı bir programlama dili olduğu için bir çok yapı nesnelerden meydana gelir (diziler,fonksiyonlar,tarih...) object type'ı kullanrak bir net bir şekilde nesne tipini kısıtlayamıyoruz.

 * Biz genelde daha spesifik bir şekilde özellikleri tanımlanmış olan nesneler gerekir. Bu noktada nesnenin özelliklerinin tipini tanımlamalıyız. Bu sayede ts hem hataları izler hgem oto. tamamlamayı devreye sokar.
 */

// Yanlış Yol
let data: object;

data = {};
data = [];
data = new Date();
data = function () {};

// Doğru Yol

// 1- Tip tanımı
let student: {
  id: number;
  name: string;
  surname: string;
  age: number;
};

// 2- Değer ataması
student = {
  id: 123,
  name: "ahmet",
  surname: "tuna",
  age: 45,
};

// Örneğin api'dan gelen veri tipini tanımla

// tipi tanımlama
let user: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string | number;
    suite: string | number;
    city: string;
    zipcode: string | number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// değer ataması
user = {
  id: 2,
  name: "Ervin Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
      lat: -43.9509,
      lng: -34.4618,
    },
  },
  phone: "010-692-6593 x09125",
  website: "anastasia.net",
  company: {
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains",
  },
};

// oto tamamlama
user.address.suite;
// user.address.daire;
