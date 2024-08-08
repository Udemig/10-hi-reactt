/*
 * Any Type:
 * Bir değişkene any type atadığımız zaman herhangi bir tür kısıtlamasına maruz kalmaz.
  
 * TS'de any type ile tanımlanmış olan bir değişken JS'de tanımlanmış bir değişken ile aynı davranır. Yani her tipte veri alabilir.

 * Normal şartlarda any kullanlıması ts mantığına aykırıdır.
 * Sadece "geçici / acil" durumlarda kullanılır ve daha sonra bütün any tipleri olması gereken tipleri çevvrilir.
*/

let foo: any;

foo = {};

foo = "merhaba";

foo = 45;

foo = () => {};

// Soru: bir dizi içerisinde veya tuple'larda kullanıalabilir mi ?

// Cevap: Evet, tip atamasının yapıldığı her yerde kullanılır.

let rgb: [string, number, any];

let herhangi: any[] = [123, "dsfds", true, () => {}];
