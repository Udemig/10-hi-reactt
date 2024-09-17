import Link from "next/link";

const BreadCrumb = () => {
  return (
    <div>
      <Link className="text-blue-500" href="/home">
        Ansayfa
      </Link>{" "}
      / <span>Arabalar</span> / <span>Nissan GTR R-35</span>
    </div>
  );
};

export default BreadCrumb;
