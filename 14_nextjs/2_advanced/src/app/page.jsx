import manzara from "./assets/manzara.jpg";
import Image from "next/image";

const Home = () => {
  const url =
    "https://images.pexels.com/photos/18996821/pexels-photo-18996821/free-photo-of-ahsap-tahta-peyzaj-manzara.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="text-2xl font-semibold p-10 flex flex-col gap-20">
      <h1>Anasayfa</h1>

      <div>
        <h2>Local Resim (İndirdiğimiz)</h2>
        <Image
          src={manzara}
          quality={44}
          priority
          placeholder="blur"
          // blurDataURL="./assets/blured.jpg"
        />
      </div>

      <div>
        <h2>Remote Resim (Url Tanımı)</h2>
        <Image src={url} width={600} height={400} quality={40} />
      </div>

      <div>
        <h2>Remote Resim (Full Genişlik)</h2>
        <div className="relative h-[500px]">
          <Image src={url} fill />
        </div>
      </div>
    </div>
  );
};

export default Home;
