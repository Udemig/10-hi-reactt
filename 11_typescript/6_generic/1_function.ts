/*
 ! Generic
 * Bir fonksiyonun type'ın, class'ın veya interface'İn içerisndeki bazı türlerin dinamik olarak değişebilmesini sağlayan yapıdır.

 * Bir fonsiyon içerisndeki generic nasıl tanımlanır ? 

 - Bir generic her türü değer olarak alabilir (kendi oluşturduğumuz türler dahil)
 - Generic type'lar tanımlandığı fonksiyonun içerisndeki her yerde kullanılabilir.
 - Bir fonksiyonda istenildği kadar generic tip tanımlaanbilir.
*/

// Generic tip olmadan rastgele değer getiren fonksiyon yazalım
const getRandomNumber = (array: number[]): number => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

console.log(getRandomNumber([12, 4365, 79, 34, 7, 34, 658, 23, 23]));

// projenin üzeirinden 2 gün geçti bu sefer aynı fonksiyonu stirng bir dizi için kullanmak istediniz bunun tek yolu şuan için yeni bir fonksiyon yazmak
const getRandomString = (array: string[]): string => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

console.log(getRandomString(["merhaba", "nasılsın", "naber"]));

// generic yardımıyla sorunu çözelim
const getRandomEle = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

getRandomEle<string>(["naber", "selam", "nasılsın"]);

getRandomEle<number>([1, 45, 7, 3, 7]);

getRandomEle<boolean>([true, false, true, true, false]);

//* normalde generic tip alan fonksiyona parametre gönderdiğimiz zaman o parametrenin tipi herneyse generic olarak o prametrenin tipini gönderirir ama bazı durumlarda beklenemdik sonuçlar oluşturucağı için tercih etmeyiz

getRandomEle(["a", "b", "c"]);
