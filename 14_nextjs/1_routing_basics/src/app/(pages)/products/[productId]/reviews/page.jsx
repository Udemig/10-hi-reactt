import Link from "next/link";

const Reviews = ({ params }) => {
  return (
    <div>
      <p>
        <span className="text-red-500">{params.productId}</span>
        id'li ürünün yorumları
      </p>

      <div className="flex flex-col gap-10 mt-10">
        <Link href="reviews/1">Yorum - 1</Link>
        <Link href="reviews/2">Yorum - 2</Link>
        <Link href="reviews/3">Yorum - 3</Link>
        <Link href="reviews/4">Yorum - 4</Link>
        <Link href="reviews/5">Yorum - 5</Link>
      </div>
    </div>
  );
};

export default Reviews;
