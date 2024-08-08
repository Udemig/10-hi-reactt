/*
 * Type Aliases | Custom Type
 * Şu ana kadar tip ataması yaparken js'de var olana temel tipler ve ekstra olarak bir iki ts ts tipi kullandık.
  
 * Gerçek projelerde o anki yaptığımız işe özel spesifik veri tiplerine igtiyaç duyabiliyoruz.

 * Bunları tanımlamak için type anahtar kelimesini kullanarız.

 * Neden ihtiyacımız var ?
 * Çünkü belirlediğimiz type projenin bir çok alanında / sayfasında kullanılması gerekbilir. Bu noktada custom type kullanarak kopyala yapışturın ve kod tekrarının önüne geçeriz

*/

// örnek - 1
// kendi özel tipimizi oluşturduk
type metin = string;

// o tipi kullandık
let isim1: metin = "zeki";
// let isim2: metin = 35;

// örnek - 2
// * aynı union type'ı projede defalarca kullandığımız bir seneryo olsun
let foo: string | number | boolean = "merhaba";
let bar: string | number | boolean = 35;
let baz: string | number | boolean = true;

// * yukarıdaki kod tekrarını önlemek için type aliases kullanalım
type SNBType = string | number | boolean;

let foo1: SNBType = "merhaba";
let bar1: SNBType = 35;
let baz1: SNBType = true;

// örnek - 3
//* aynı nesneyi proje içerisnde bir çok defa kullandığımız bir seneryo olsun
let user1: { name: string; age: number; mail: string } = {
  name: "Ali",
  age: 40,
  mail: "ali@gmail.com",
};

let user2: { name: string; age: number; mail: string } = {
  name: "Ayşe",
  age: 20,
  mail: "ayşa@gmail.com",
};

let user3: { name: string; age: number; mail: string } = {
  name: "Mehmet",
  age: 35,
  mail: "mehmet@gmail.com",
};

let explain1 = (user: { name: string; age: number; mail: string }) => {};

const users1: { name: string; age: number; mail: string }[] = [];

//* yukarıdaki kod tekrarını type aliases kullanarak çözelim
type UserType = { name: string; age: number; mail: string };

let user4: UserType = {
  name: "Ali",
  age: 40,
  mail: "ali@gmail.com",
};

let user5: UserType = {
  name: "Ayşe",
  age: 20,
  mail: "ayşa@gmail.com",
};

let user6: UserType = {
  name: "Mehmet",
  age: 35,
  mail: "mehmet@gmail.com",
};

let explain2 = (user: UserType) => {};

const users2: UserType[] = [];

// Örnek - 4
// Proje içeridnde sıkça kullanılcak bir tuple için kendi tipimizi oluşturalım.

export type Geo = [number, number];

let xCoords: Geo = [45, 12];
let yCoords: Geo = [12, 67];

// Oluşturuğumuz cusotm type'ları sadece değişken tanımlarken değil fonksiyon tipi tanımlarkden dizi tipi tanımlarken kısaca tip tanınmlanabilecek her yerde kendi oluşturğumuz tipleri kullanabiliriz

const flightRoute: Geo[] = [
  [12, 45],
  [13, 45],
  [13, 46],
  [13, 47],
  [13, 48],
  [14, 48],
  [15, 48],
  [15, 49],
  [16, 49],
];
