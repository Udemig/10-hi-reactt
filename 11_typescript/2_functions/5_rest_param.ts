/*
 * Rest Param
 * Prametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanılır.
  
 * Özellikler
 * Bir parametreyi rest param haline getirmek için "..." kullanılırız.
 * Bir rest paramın ardından herhangi bir farklı parametre yazılamaz (sebebi rest param kaç tane değer alıcağının belli olmaması)  
 
 * Rest parametre gönderilen değerleri en son diziye çevirir. 
*/

function toplam(metin: string, ...sayilar: number[]) {
  console.log(metin + sayilar.reduce((toplam, sayi) => toplam + sayi, 0));
}

toplam("Sonuç: ", 10, 40);
toplam("Sonuç: ", 10, 40, 60, 2, 6, 8, 3);
toplam("Sonuç: ", 10, 40, 60, 2, 6, 8, 3, 3, 7, 0, 4, 2, 5);

// Örnek
const yoklama = (teacher: string, ...students: string[]) => [
  console.log(teacher + " öğretmen yoklamaya başladı"),
  console.log("-----------------"),
  students.forEach((student) => console.log(student + " burdaa!")),
  console.log(students.length + " öğrenci var"),
];

yoklama("Ayşe", "Ali", "Fatma", "Faruk", "Ahmet", "Ersin", "Özgün");

/*
 ! Challange
 * İstenildiği kadar sayı değeri gönderilebilen bir fonksiyon yazınız.
 * Aldığı ilk 2 parametreyi çarpsın
 * İlk 2 parametre dışarısında geriye kalanları toplasın
 * Toplam ve çarpımı bir nesne içerisnde döndürsün
 
 * hesapla(10,20,4,5,6)
 * {carpim:200, toplam:15} 
 * return {toplam,carpim}
*/

// Cevap - 1
const hesapla = (sayi1: number, sayi2: number, ...sayilar: number[]) => {
  let carpim = sayi1 * sayi2;

  let toplam = sayilar.reduce((a, b) => a + b, 0);

  return { toplam, carpim };
};

console.log(hesapla(10, 20, 4, 5, 6));

// Cevap - 2
const hesapla2 = (...sayilar: number[]) => {
  let carpim = sayilar[0] * sayilar[1];

  let toplam = sayilar.slice(2).reduce((a, b) => a + b, 0);

  return { toplam, carpim };
};

console.log(hesapla(10, 20, 4, 5, 6));
