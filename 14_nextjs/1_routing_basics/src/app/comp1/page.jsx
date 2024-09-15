import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Sayfa - 1</h1>

      <br />

      <Link className="text-blue-500 text-xl" href="/comp1/comp2">
        2. Sayfaya Git
      </Link>
    </div>
  );
};

export default Page;
