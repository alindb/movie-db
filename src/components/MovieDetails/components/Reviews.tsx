import { Reviews as ReviewsType } from "../../../typescript/interfaces";
import "./Reviews.scss";
import { getParagraphs } from "../../../utils/string";
import Review from "./Review";

export default function Reviews({ reviews }: { reviews: ReviewsType }) {
  console.warn("Reviews", getParagraphs(reviews.results[3].content));

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
