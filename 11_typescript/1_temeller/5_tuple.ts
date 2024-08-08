/*
 * Tuple Types
 * Typescript ile birlikte hayatımıza giren bir tiptir.
 
 * Kullanım koşulları
 * * Dizinin uzunluğu sabit olmalı
 * * Dizideki elemanlarının sırası değişmemeli
 
 * Kullanım
 * Örn: [number,string,object] 
 */

// Örnek - 1
const ders: [string, number] = ["Fizik", 86];

// Örnek - 2
// bir renk geçişi için veri tipi tanımlayalım
const gradient: [string, number, number] = ["to-right", 345666, 984444];

// Örnek - 3
// Bir css rgb/rgba renginin değerlerini dizi içerisinde tutalım

let color: [number, number, number?, number?];

color = [157, 568, 321];
color = [157, 568, 321, 0.4];

// Soru: Birden fazla opsiyonel değer olabilir mi?
// Cevap: Evet ama bir kural var, opsiyonel değerlerin hepsi tuple dizisinin en sonunda yer almalı
// Opsiyonel elemanın ardından szorunlu bir eleman gelemez

let date: [number, (string | number)?, number?];

date = [10, "Ocak", 1999];

date = [10, 11, 1999];

date = [10, "Ocak"];

date = [10];

date = [10, undefined, 1990];

// Gerçek Projede

// const [count, setCount]:[number,function] = useState(0);

// const [name, setName]:[string,function] = useState("");
