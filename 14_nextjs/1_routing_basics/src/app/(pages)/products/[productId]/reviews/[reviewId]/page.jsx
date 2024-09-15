const Review = ({ params }) => {
  console.log(params);
  return (
    <div>
      <span className="text-red-500">{params.productId}</span> id'li Ürünün
      <br />
      <span className="text-red-500">{params.reviewId}</span> id'li Yorumu
    </div>
  );
};

export default Review;
