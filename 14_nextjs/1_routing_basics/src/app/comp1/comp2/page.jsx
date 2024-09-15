import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Sayfa - 2</h1>

      <Link className="text-blue-500 text-xl" href="/comp1">
        1. Sayfaya Dön
      </Link>
    </div>
  );
};

export default Page;
