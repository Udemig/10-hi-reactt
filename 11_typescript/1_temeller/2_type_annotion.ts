/*
 * Type Annotion
 * JS'de değişkenin türünü belirleme gibi bir özellik söz konusu değil.
 * Fakat TS'de tanımladığımız değişkenlere tip kısıtlamasıda uygulayabiliyoruz.
 * Bu sayede değer ataması yaparken belirlenene tip kısıtlamlarının dışarısına çıkamıyoruz.
 * Bu durumda kodda oluşabilecek ve gözden kaçabilecek hataları erkenden önüne geçeriz
 */

let foo: number;

foo = 20;

foo = 99;

// foo = "deneme";  HATA
// foo = true;  HATA
// foo = {};  HATA

/*
 * Javascript Veri Tipler
 * number
 * string
 * boolean
 * object
 * array
 * null
 * undefined
 * function
 * symbol (pek kullanılmaz)
 * bigint (pek kullanılmaz)
 *
 * bu veri tiplerini type annotion yaparken kullanabiliyoruz
 */

let project: string = "Event App";

var age: number = 45;

const licence: boolean = true;

let student: object = {
  id: 2,
  name: "Ali",
};

let baz: null = null;

let bar: undefined = undefined;
let bam: undefined;

console.log(student);
