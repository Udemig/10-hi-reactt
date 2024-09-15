import { play } from "../layout";

const Article = () => {
  return (
    <div className="flex flex-col gap-10 p-5">
      <h1 className="text-4xl">Makaleler</h1>

      <div>
        <h1 style={play.style} className="text-xl mb-3 font-semibold">
          Web Geliştirmede API'lerin Önemi
        </h1>
        <p>
          API'ler, yazılım uygulamalarının birbiriyle veri alışverişi
          yapmasını sağlar. Web geliştirme süreçlerinde işlevselliği
          artırarak uygulama entegrasyonlarını kolaylaştırır.
        </p>
      </div>

      <div>
        <h1 className={`text-xl mb-3 font-semibold ${play.className}`}>
          Frontend Teknolojilerinde Trendler: 2024
        </h1>
        <p>
          2024'te, React ve Next.js gibi popüler frontend kütüphaneleriyle
          birlikte, tasarım odaklı yaklaşımlar ve daha hızlı yüklenen
          siteler trend olmaya devam ediyor.
        </p>
      </div>

      <div>
        <h1 style={play.style} className="text-xl mb-3 font-semibold">
          MongoDB ile Veritabanı Yönetimi: Temel Kavramlar
        </h1>
        <p>
          MongoDB, esnek veri yapısı ve yüksek performansıyla popüler bir
          NoSQL veritabanıdır. Veritabanı yönetiminde hız ve esneklik
          sağlar, özellikle büyük veri setleri için idealdir.
        </p>
      </div>
    </div>
  );
};

export default Article;
