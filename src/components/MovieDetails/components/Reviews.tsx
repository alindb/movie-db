import Badge from "react-bootstrap/Badge";
import { Reviews as ReviewsType } from "../../../typescript/interfaces";
import "./Reviews.scss";

const imageBaseUrl = "http://image.tmdb.org/t/p/";

export default function Reviews({ reviews }: { reviews: ReviewsType }) {
  return (
    <div className="reviews">
      <h3>{`Reviews (${reviews.results.length})`}</h3>
      <ul>
        {reviews.results.map((review) => (
          <li className="review" key={review.id}>
            {review.author_details.avatar_path ? (
              <img
                src={`${imageBaseUrl}w45${review.author_details.avatar_path}`}
                alt={review.author}
              />
            ) : (
              <i className="fa-solid fa-circle-user no-profile-img" />
            )}
            <div>
              <h5>{review.author}</h5>
              <Badge pill bg="secondary">
                <i className="fa-solid fa-star" />
                {review.author_details.rating}
              </Badge>
            </div>
            <p>{review.content}</p>
          </li>
        ))}
        {reviews.results.length === 0 && "No reviews found for this movie."}
      </ul>
    </div>
  );
}
