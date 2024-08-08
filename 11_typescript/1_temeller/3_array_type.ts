/*
  * Array Type:

  * Typescript'de dizilerin tipini tanımlarken sadece bu dizi olucak demeyiz o dizinin içerisndeki elemanlarında tipini tanımlarız

  * Tanım tip[] > string[] > number[]
*/

// Örnek - 1
const users: string[] = ["Gül", "Fatma", "Ali", "Veli"];

// bu tip tanımı sadece değer ataması yaparken değil bütün dizi methodlarında da devreye girer

users.push("Ahmet");

// users.push(23); // HATA
// users.unshift(null) // HATA

// Örnek - 2
const prices: number[] = [120, 980, 457, 3557];

prices.unshift(435);

// Örnek - 3
const dizi: boolean[] = [true, false, true, false];

// Örnek - 4
const cars: object[] = [{ name: "BMW" }, { name: "Mercedes" }];

/*
 * Soru: Bir dizi içerisinde birden fazla farklı tipte veri olmasını istiyorsak naparız ?

 * Cevap: Normalde bir dizide tek türde veri olması beklenir.
 * Bazı durumlarda birden fazla tipte veri  alan diziler olabilir.
 * "Union Types - Birleşik Tipker"
 * string | number > string yada number
 */

// örn: öğretmenler dizisi ya string yada null değer alabilsin
let teachers: (string | null)[] = ["Uğur", "Ahmet", null];
