/*
 * Type Annotion
 * JS'de değişkenin türünü belirleme gibi bir özellik söz konusu değil.
 * Fakat TS'de tanımladığımız değişkenlere tip kısıtlamasıda uygulayabiliyoruz.
 * Bu sayede değer ataması yaparken belirlenene tip kısıtlamlarının dışarısına çıkamıyoruz.
 * Bu durumda kodda oluşabilecek ve gözden kaçabilecek hataları erkenden önüne geçeriz
 */
var foo;
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
var project = "Event App";
var age = 45;
var licence = true;
var student = {
    id: 2,
    name: "Ali",
};
var baz = null;
var bar = undefined;
var bam;
console.log(student);
