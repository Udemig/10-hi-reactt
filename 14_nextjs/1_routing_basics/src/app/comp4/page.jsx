import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Sayfa - 4</h1>

      <Link className="text-blue-500 text-xl" href="/comp3">
        3. Sayfaya Git
      </Link>
    </div>
  );
};

export default Page;
