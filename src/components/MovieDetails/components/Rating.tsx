import { Movie } from "../../../typescript/interfaces";

interface RatingProps {
  movie: Movie;
}

export default function Rating({ movie }: RatingProps) {
  const numberOfVotes = (voteCount: number) =>
    voteCount > 1000
      ? `${Math.floor(voteCount / 1000)}K votes`
      : `${voteCount} votes`;

  return (
    <div className="rating-container">
      <i className="fa-solid fa-star" />
      <div className="rating-text-container">
        <div className="rating">
          <span>{`${Math.round(movie.vote_average * 10) / 10}`}</span>
          <span>/10</span>
        </div>
        <span>{numberOfVotes(movie.vote_count)}</span>
      </div>
    </div>
  );
}
