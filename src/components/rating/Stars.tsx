import Star from "./Star";

type starsProps = {
  rating: string | number;
};

function Stars({ rating }: starsProps) {
  const numericRating = Number(rating);

  return (
    <>
      <ul className="rating-list">
        {[...Array(5)].map((_, index) => (
          <Star key={index} filled={index < numericRating} />
        ))}
      </ul>
    </>
  );
}
export default Stars;
