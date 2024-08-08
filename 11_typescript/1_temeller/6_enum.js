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
var colors = {
    red: 0,
    yellow: 1,
    green: 2,
};
//- TS'de enum kullanarak
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
console.log("Kırmızı", Color.red); // 0
console.log("Sarı", Color.yellow); // 1
console.log("Yeşil", Color.green); // 2
// bu seneryoda enum kullanmamızın en büyük avanatajı oluşturduğumuz enum'ı bir tip olarak kullanabiliyor olmamızdır. enumu tip olarak kullandıığımız zaman o değişkeni sadece enum'ın içindeki değerler ile kısıtlamış oluruz
var speak = function (light) {
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
var Gun;
(function (Gun) {
    Gun[Gun["Pazartesi"] = 0] = "Pazartesi";
    Gun[Gun["Sali"] = 1] = "Sali";
    Gun[Gun["Carsamba"] = 2] = "Carsamba";
    Gun[Gun["Persembe"] = 3] = "Persembe";
    Gun[Gun["Cuma"] = 4] = "Cuma";
    Gun[Gun["Cumartesi"] = 5] = "Cumartesi";
    Gun[Gun["Pazar"] = 6] = "Pazar";
})(Gun || (Gun = {}));
var day1 = Gun.Carsamba;
var day2 = Gun[4];
var day3 = Gun[Gun.Pazar];
console.log(day1); // 2
console.log(day2); // Cuma
console.log(day3); // Pazar
// Örnek - 3
// Bir kargo sitesi yazıyoruz ve kulalnıcıları arayüzde sıklıkla kargo durumunu yazmamız gerekiyor
var Status;
(function (Status) {
    Status["set"] = "Haz\u0131rlan\u0131yor";
    Status["travel"] = "Da\u011F\u0131t\u0131ma \u00C7\u0131kt\u0131";
    Status["done"] = "Teslim Edildi";
})(Status || (Status = {}));
console.log(Status.set);
