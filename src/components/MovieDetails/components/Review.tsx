import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ProfileImg from "components/ProfileImg";
import { getParagraphs } from "utils/string";
import { Review as ReviewType } from "typescript/interfaces";
import "./Reviews.scss";

export default function Review({ review }: { review: ReviewType }) {
  const [seeMore, setSeeMore] = useState(false);

  const reviewContent = getParagraphs(review.content);
  const paragraphs = seeMore ? reviewContent : reviewContent.slice(0, 2);

  return (
    <li className="review" key={review.id}>
      <ProfileImg
        path={review.author_details.avatar_path}
        alt={review.author}
      />
      <div className="review-info">
        <h5>{review.author}</h5>
        <div>
          {review.author_details.rating && (
            <Badge pill bg="secondary">
              <i className="fa-solid fa-star" />
              {review.author_details.rating}
            </Badge>
          )}
          <span className="created-at">{review.created_at.slice(0, 10)}</span>
        </div>
      </div>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="review-paragraph">
          {paragraph}
        </p>
      ))}
      {reviewContent.length > 2 && (
        <Button
          variant="outline-secondary"
          onClick={() => setSeeMore((prevValue) => !prevValue)}
        >
          {seeMore ? "Show less" : "Read more"}
        </Button>
      )}
    </li>
  );
}
