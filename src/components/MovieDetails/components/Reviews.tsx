import { Reviews as ReviewsType } from "../../../typescript/interfaces";
import Review from "./Review";
import "./Reviews.scss";

export default function Reviews({ reviews }: { reviews: ReviewsType }) {
  return (
    <div className="reviews">
      <h3>{`Reviews (${reviews.results.length})`}</h3>
      <ul>
        {reviews.results.map((review) => (
          <Review review={review} />
        ))}
        {reviews.results.length === 0 && "No reviews found for this movie."}
      </ul>
    </div>
  );
}
