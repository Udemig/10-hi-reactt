"use client";

import { data } from "@/app/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Detail = ({ params }) => {
  const item = data.find((i) => i.id === params.id);

  const router = useRouter();

  const close = () => {
    // 1 sayfa geriye yönlendir
    router.back();

    // 1 sayfa ileriye yönlendirir
    // router.forward();

    // belirli bir yola yönlendirir
    // router.push("/");

    // sayfayı yeniler
    // router.refresh();
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/60 grid place-items-center">
      <div className="bg-white rounded-md px-10 pb-10 text-black text-5xl flex flex-col gap-5">
        <div className="text-lg flex justify-between my-5 ">
          <button
            onClick={close}
            className="size-10 border border-black rounded-lg transition hover:bg-black/40"
          >
            X
          </button>
          <button
            onClick={refresh}
            className="size-10 border border-black rounded-lg transition hover:bg-black/40"
          >
            G
          </button>
        </div>

        <Image
          src={item.src}
          className="w-full max-h-[400px] objext-cover aspect-square rounded-md"
        />

        <div>
          <h2>{item.name}</h2>
        </div>

        <div className="text-xl flex flex-col">
          <span>Fotoğrafçı</span>
          <span className="font-semibold">{item.photographer}</span>
        </div>

        <div className="text-xl flex flex-col">
          <span>Lokasyon</span>
          <span className="font-semibold">{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
