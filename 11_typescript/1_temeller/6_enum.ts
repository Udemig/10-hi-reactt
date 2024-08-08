/*
 * Enum (Numaralandırma)
 * Belirli Değerler Kümesi
 
 * Benzer kategorideki değişkenleri bir arada tutmak için kullanılır.

 * Genelde az miktarda farklı değere sahip veirlerin gruplandırması için kullanılır.

 * İsmlendirme
 * Enum isimlendirirken değişken isimlendirme kurallarına göre uyarız.
 * İlk harfi büyük olur
 * Çoğul takısı kullanmayız
 * Months X | Month ✓
 * Renkler X | Renk ✓
 */

//* Örn: Trafik ışığının aşamalarının verisini tutalım

//- Klasik JS ile
const colors = {
  red: 0,
  yellow: 1,
  green: 2,
};

//- TS'de enum kullanarak
enum Color {
  red,
  yellow,
  green,
}

console.log("Kırmızı", Color.red); // 0
console.log("Sarı", Color.yellow); // 1
console.log("Yeşil", Color.green); // 2

// bu seneryoda enum kullanmamızın en büyük avanatajı oluşturduğumuz enum'ı bir tip olarak kullanabiliyor olmamızdır. enumu tip olarak kullandıığımız zaman o değişkeni sadece enum'ın içindeki değerler ile kısıtlamış oluruz
const speak = (light: Color) => {
  switch (light) {
    case Color.red:
      return console.log("Lütfen durunuz");
    case Color.yellow:
      return console.log("Hazırlanın");
    case Color.green:
      return console.log("İlerleyebilirsiniz");
  }
};

speak(Color.green);
speak(Color.red);
speak(Color.yellow);
// speak("kırmızı");

// Örnek - 2
enum Gun {
  Pazartesi,
  Sali,
  Carsamba,
  Persembe,
  Cuma,
  Cumartesi,
  Pazar,
}

let day1 = Gun.Carsamba;
let day2 = Gun[4];
let day3 = Gun[Gun.Pazar];

console.log(day1); // 2
console.log(day2); // Cuma
console.log(day3); // Pazar

// Örnek - 3
// Bir kargo sitesi yazıyoruz ve kulalnıcıları arayüzde sıklıkla kargo durumunu yazmamız gerekiyor
// İstersek değişkenlere oto. atanan sayıların yerine kendizimiz değer atayabiliyoruz

enum Status {
  set = "Hazırlanıyor",
  travel = "Dağıtıma Çıktı",
  done = "Teslim Edildi",
}

console.log(Status.set); // Hazırlanıyor

// enum'ı tip olarak kullanabiliyoruz
const test = (durum: Status) => {};

test(Status.set);
test(Status.travel);
test("Teslim Ediliyor");
