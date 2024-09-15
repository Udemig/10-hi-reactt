import { getRecipies } from "@/app/utils";
import Link from "next/link";

const Header = async () => {
  const data = await getRecipies();

  return (
    <div className="px-10 py-5 mb-10 border-b text-lg flex justify-between">
      <h1>Next.js</h1>

      <nav className="flex gap-5">
        <Link href="/home">
          Anasayfa{" "}
          <span className="bg-red-500 p-1 rounded-md text-base">
            {data.recipes.length}
          </span>
        </Link>
        <Link href="/gallery">Galeri</Link>
        <Link href="/iletisim">İletişim</Link>
      </nav>
    </div>
  );
};

export default Header;
