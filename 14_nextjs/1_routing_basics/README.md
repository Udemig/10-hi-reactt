# App Router

- Dosya dizinine göre / klasör tabanlı sayfalama yapar.
- Bütün sayfalar src/app klasörü içerisinde tanımlanır.
- App içerisinde tanımlanana ve içinde page.jsx dosyası olan her bir klasör bir sayfaya denk gelir

## Nested Routes - İç İçe Yollar

- örn:
- /profile > profili görüntüle
- /profile/friend > arkadaşlarını görüntüle
- /profile/edit > profili düzenle

- nested routes oluştururken bir alt route oluşturmak için sadece bir sayfa klasörü içerisinde page.js dosyası olan bir klasör daha oluşturmalıyız

## Dynamic Routes - Dinamik Yollar

- Bir e ticaret projesi yapıyorsak yüzlerce ürün olduğundan dolayı ürün detay sayfasını url'deki parametreye gröe değişen bir şekilde oluşturmamız gerekir.
- Youtube > Video Detay Sayfası
- Amazon > Ürün Detay Sayfası

## Nested Dynamic ROutes - İç İçe Dinamik Yollar

- örn: /products/20/reviews > id'si 20 olan ürünün yorumları

- örn: /products/20/reviews/9 > is'si 20 olan ürünün yorumlarından 9 id'li yorumun sayfası

## Route Group - Yol Gruplandırma

- Proje içerisinde sayfları gruplandırmak isteyebiliriz.

- Yazdığımız sayfaların daha kolay erişilebilir olması için routeları gruplandırmak isteyebiliriz.

- Nested routes'dan farklı olarak url'e etki etmez

- Örneğin

- Auth
- - Login
- - Signup
- - ForgotPass

- Profile
- - User
- - EditUser
- - UserFriends

- Kullanımındaki amaç daja erişilebilir ve daha kolay yönetilebilir hale getirmesi ve layout yapısı.

# Metadata

- SEO açasından her sayfa için metadata'ları tanımlamak önemlidir.

- Sayfaların metadata dediğimiz tarayıcıda öne çıkması için ihtiycaı olan başlık / açıklama / logo / yapımcı gibi değerleri react'da sabit bir şekilde bütün sayfalarda aynı olarak ifade ederken next.js'de bunu ger sayfaya özel tanımlyabiliyoruz

- Bir sayfanın metadatasını tanımlamak için o sayfada metadata isimli bir nesne oluşturup export etmek yeterlidir

- Dinamik sayfalarda sayfanın title'ınında dinamik olmasını isyebiliriz. Örneğin Ürün - 10, Ürün - 20 gibi oalbilir ve bu 10 - 20 sayılarını parametreye bağlı dinamik olarak değiştebiliriz. Bu tarz durumlarda ise statik bir nesne oluşturmak yerine generateMetada() fonksiyonunu kullanırız

# Not Found Page

- next.js'de tanımlı olmayan bir sayfaya gittiğimizde devreye varsayılan bir 404 sayfası girer

- app klasörü içerisinde not-found.jsx oluşturursak bu 404 sayfasını kendimiz özelleştirebilir

- bir sayfa içerisnden 404 sayfasına yönlendirme yapmak için ise notFound() fonksiyonunu kullanabiliriz.

# Layout - Düzen Bileşeni

- Bir uygulamanın veya saya grubunun genel sayfa düzenini belirlemimize olanak sağlar

- Bir sayfa grubununun ortak olarak kullandığı bileşenleri layout'a tanımlayıp kod tekrarını önleyebiliriz.

- Root layout'a yaptığımız değişiklikler bütün sayfları etikiler. Ama bazı durumlarda sadece bir kaç sayfanın ortak kullanıvğı bir düzen belirlemek isteyebiliriz bu durumda kendi layout bileşeninmizi oluştururuz.

## Template - Şablon

- Layout ile aynı görevi yapar.
- Layout'dan farklı olarak sayfa geçişlerinde state sıfırlanır

# Özel Dosyalar

- page > sayfa oluşturmak
- layout > sayfa düzeni
- template > sayfa düzeni
- not-found > tanımsız sayfa

- loading
- - bir bileşen async await ile beklediği süre boyunca ekrana otomatik olarak gelir

- error
- - bir bileşnden hata fırlatıldığı anda ekrana gelir
- - hatanın bilgilerini ve bileşeni tekrar render etmeye yarayan methodu direkt prop olarak alır

# Teknik Bir Konu

- Nextjs'de static ve dynamic page kavramları sayfanın nasıl olduşturulduğunu ve kullanıcya nasıl sunulacağını ifade eder

1. Static Page (Statik Sayfa)

- Derleme aşamasında (build-time) oluşturulur ve HTML dosyları olarak sunucuya yüklenir. Bu sayfalar, içeriklerinde değişiklik olmadıkçta tekrar oluşturulmaz

- Özellikler

* Performans: Çok hızlıdır, çünkü sayfalar bir kez oluşturulur ve CDN üzerinden önbelleğe alınabilir Bu sayede her istek sunucuda yeniden işlenmez.

* SEO: SEO açısından iyidir, çünkü sayfa içeirği tarayıcılar tarafından kolayaa indexlenebilir

2. Dynamic Page (Statik Sayfa)

- Dinamik sayfalar, her kullanıcı isteğinde dinamik olarak oluşturulur. Yani sayfa içeriği kullanıcan kullanıya veuya parametreye bağlı olarak değişebilir.

## Catch All Segments

- Bir yola ait birden fazla parametre varsa kulanılan yöntemdir.

- /docs/belge-1

- /docs/belge-1/sayfa-10

- /docs/belge-1/sayfa-10/satir-40

- Yurakıdaki örnekte urlde 1-3 arasında parametre bulunabilir böyle bir durumda Catch All Segments yöntemiyle bütün paraemtrelere erişebiliriz.

# Intercepting Routes

- Nextjs'de bir url'e gitemeden, farklı bir sayfanın içeriğini gösterme tekniğidir. bu teknikle bir kullanıcı farklı bir sayfaya geçiş yapmaya çalıştığında, normal bir sayfa yüklenmesi yerine geçici olarak bir modal veya benzeri bir bileşen gösterebiliriz. Bu sayede kullanıcı mevcut sayfada kalır ve yönlendirme işlemi gösrsel olarak geçekleşir
