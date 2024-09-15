"use client";

import { useSearchParams } from "next/navigation";

const Page = () => {
  const params = useSearchParams();

  const price = params.get("fiyat");
  const cat = params.get("kategori");
  const id = params.get("id");

  console.log(price, cat, id);

  return (
    <div className="flex flex-col gap-10 text-center text-5xl">
      <p>{price}</p>

      <p>{cat}</p>

      <p>{id}</p>
    </div>
  );
};

export default Page;
