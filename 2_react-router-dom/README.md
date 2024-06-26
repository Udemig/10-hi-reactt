## Routes

- Tarayıcıda ki urli izler url her değiştitğinde urldeki yol tanımladığımız routelerdan birini path değeri ile eşleşiyor mu kontrol eder eşleşirse o routeun elementini ekrana basar.

## Link

- Proje içerisinde yönlendirme işlemlerinde a etiketi yerine kullanılır.
- Href yerine `to` değeri yönlendirilecek olan sayfayı belirler.

## Navlink

- Link etiketi ile aynı görevi yapar.
- Eğer ki kullanıcının bulunduğu sayfa linkin `to` değeri eşleşirse o linke active classı verir.

## useNavigate

- Kullanıcıyı yönlendirme işlemini yapan fonksiyona erişimini sağlar.
- Link etiketiyle aynı şekilde yönlendirme işini yapar.
- Bir fonksiyon içerisinde yönlendime yaparken link tercih edemeyeceğimiz için useNavigate'i kullanırız.
- Kullanırken önce import edilmeli ardından useNavigate çağrılıp içerisindeki yönlendirmeye yarayan fonksiyona erişilmelidir.

## useParams

- URL'de tanımlı olan yol parametrelerini bir nesne şeklinde dönderir
