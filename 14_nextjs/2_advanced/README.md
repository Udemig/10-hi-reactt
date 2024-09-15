## Image

- Nextjs'de opitmize edilmiş görntü yönetimi için kullanılan bir bileşendir.

- Resimleri optimizie ederek daha hızlı yüklenmeler, performans artışı ve daha iyi bir kullanıcı deneyimi sağlar.

## Özellikler

1. Resimleri otomatik olarak sıkıştırır ve optimize eder.

2. Lazy Loading özelliği sayesinde görüntüler sayfada göründükleri zaman yüklenir.

3. Resimlerin daha düşük dosya boytunda yüksek kaliteli gözükmesi için jpeg / png formatlarından webp formatına dönüştürür

# CSR vs SSR

- Client Side Rendering
- Server Side Rendering

- Client component kullanırsak render yöntemi CSR olur
- Server component kullanırsak render yöntemi SSR olur

- Client side rendering yönetimi uygulanan bir sayfaya girdiğimizde `js kodu` ve `boş html dosyası` indiririz. İndirilen js kodu çalışır ve html dosyasını doldurur/içeriğini oluşturur.

- Server side rendering yöntemi uygulanan bir sayfaya girdiğimizde, js kodudu `sunucuda` çalışır ve `html` sunucda oluşturulur. Client ise sadece sunucudan html'indirip ekrana basar.

- Bu noktada js'in bizim bilgisayarımızdan çok daha hızlı olan sunucuda çalışması sayfa yüklenme süresini hızlandırır.

- SEO açısından dolu html indirmek önemlidir aksi takdirde google'ın robotları site içeriğini tanıyamaz ve sitenin üst sırlarda olmasının önüne geçer

# NOT

- Next.js biz aksini belirtmedikçe component'ları otomatik server component olarak tanımlar. Next.js bizden her zaman olabildiğince server compomenen kullanmamızı ister (yaptıkları optimizasyonler, cache, seo, daha hızlı).

- Her component'ı server comp yapamıyoruz. Kullanıcı etkileşimi gerektiren component mecburen client component olmalı.

# Data Fetching

- Next.js çekilen veiriyi belirli bir süre cache'de tutar ve veriyi çene fonksiyonu belirli süre içerisnde tekrar çağırdığımızda api'dan veriyi tekrar istemek yerine önceki istekden gelen ve cachede tutulan sonucu kullanırı.

- - Bu sayede;
- - api dan cevap beklemek gerekmez > daha hızlı
- - api'a gerkesiz yere istek gitmez > daha az maliyet

- Cache özelliği sayesinde api'dan gelen bir veriyi birden fazla sayfa veya bileşende kullanmak isteğyorsak redux vs. yapısına gerek klamdan bütün bileşnlerde api siteği isteği ataroz gerisini nextjs halleder.

- Varsayılan olarak bütün api isteklerinden gelen cevaplar cach'de tutulur. Ama çektiğimiz veriye göre bunu değiştirmk isteyebiliriz.
- Örn: Bir alışversinin sepet sayfaına her girlidğinde cache'deki veri gelirse sepetin eski versiyonun görürüz veya sosyal medya uygulmasında sayfaya yeniledniinde cache'deki veri gelirse eski gönderileri görürüz.
- Bu noktada veri cache'de tutulmalı mı tutulucaksa kaç saniye boyunca tutulmalı gibi ayarlarının tamamını uygulama ihtiyaçlarına göre biz belirliyoruz.

# Font

- Next içerinde bir çok fontlar ile alakalı optimizasyona sahiptir. Projede kullanılmayan varyanlatrı (klasnlık / italik) oto. oalrak algılar ve import etmez.

- Font'ları daha SEO dostu hale getirir.

- Yerel fontları yönetmek daha kolaydır

# Next.js Fonksiyonları

## useRouter

- Client component'larda fonksiyon içerisnde yönelendirme yapmak için kullanılır

- back() | forward() | refresh() | push() methodlarına sahiptir

## redirect

- Server component'larda yönlendirme yapmak için kullanılır

- Kulllanıcnın yetkisne bağlı girememsi gerekn bir sayfa varsa dışarıya yönlendirme amaçlı kullanılır

## notFound

- 404 sayfasına yönlendirir

## usePathname

- Kullanının bulunduğu yolu alır

## useSearchParams

- sadece client comp. kullanılır
- Url'deki arama parametrelerini almak için kullanılır
