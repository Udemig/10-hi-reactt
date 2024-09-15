import { getRecipies } from "../utils";

// sadece statik sayfalarda kullanırız
// bu sayfdaki bütün api istekleri 3600 saniye boyunca cahe'lensin zaman dolduktan sonra tekrar sayfa yenilenirse cache'deki verinin alınması yerine api'dan güncel veriler alınsın
export const revalidate = 3600;

// API isteği atıcağımız bileşen async olarak tanımlanmalı
const Home = async () => {
  // api isteğini at
  const data = await getRecipies();

  return (
    <div className="px-10 pb-20 text-xl">
      <h1>Anasayfa</h1>

      {data.recipes.map((item) => (
        <div className="border p-2 rounded-md my-5">
          <h1>{item.name}</h1>
          <h2>{item.cuisine}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
