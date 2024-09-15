import Link from "next/link";
import { notFound } from "next/navigation";

// 1) statik metadata tanımı
// export const metadata = {
//   title: "Ürün Detay",
// };

// 2) dinamik metadata tanımı
// bu fonksiyon bileşenin aldığı bütün prop'ları parametre olarak alır bizde buna göre metadata içeriğini belirleyebiliriz
export const generateMetadata = ({ params }) => {
  return {
    title: `Ürün ${params.productId} Detay`,
  };
};

const Detail = ({ params }) => {
  // Diyelim ki api'da 99 ürün var eğerki ürünün id'sli 99'dan  büyükse 404 sayfaına yönlendir
  if (params.productId > 99) {
    notFound();
  }

  return (
    <div>
      <Link className="text-2xl" href=".">
        Geri Dön
      </Link>
      <br />
      <br />
      <p>
        <span className="text-red-500">{params.productId}</span>
        id'li Ürünün Detayı
      </p>

      <br />
      <Link
        className="text-2xl"
        href={`/products/${params.productId}/reviews`}
      >
        Yorumları Gör
      </Link>
    </div>
  );
};

export default Detail;
