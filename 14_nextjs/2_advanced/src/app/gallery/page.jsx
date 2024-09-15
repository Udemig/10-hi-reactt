import Link from "next/link";
import { data } from "../constants";
import Image from "next/image";
import { redirect } from "next/navigation";

const Gallery = () => {
  let user = {
    name: "furkan",
    role: "admin",
  };

  // admin olmayanlar bu sayfayay giremesin
  if (user.role !== "admin") {
    redirect("/home");
  }

  return (
    <main className="container mx-auto p-5">
      <h1 className="text-center text-3xl font-bold my-10">
        Dünyanın 7 Harikası
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((item) => (
          <Link href={`/gallery/${item.id}`}>
            <Image
              src={item.src}
              className="w-full object-cover aspect-square rounded-md"
              alt={item.name}
              quality={40}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
