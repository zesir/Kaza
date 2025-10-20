import Star from "./Star";

type Props = {
  rating: string | number;
};

function Stars({ rating }: Props) {
  const numericRating = Number(rating);

  return (
    <ul className="rating-list">
      {[...Array(5)].map((_, index) => (
        <Star key={index} filled={index < numericRating} />
      ))}
    </ul>
  );
}
export default Stars;
