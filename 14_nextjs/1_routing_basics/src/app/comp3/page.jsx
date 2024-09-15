import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Sayfa - 3</h1>

      <Link className="text-blue-500 text-xl" href="/comp4">
        4. Sayfaya Git
      </Link>
    </div>
  );
};

export default Page;
