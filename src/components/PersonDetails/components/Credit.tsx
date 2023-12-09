import { Link } from "react-router-dom";
import PosterImg from "components/PosterImg";
import { getReleaseYear } from "utils/string";
import { CastCredit, CrewCredit } from "typescript/interfaces";

interface CreditProps {
  movie: CastCredit | CrewCredit;
}

const isCastCredit = (credit: CastCredit | CrewCredit): credit is CastCredit =>
  !!(credit as CastCredit).character;

export default function Credit({ movie }: CreditProps) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <PosterImg path={movie.poster_path} alt={movie.original_title} />
      <div>
        <p className="title">{movie.original_title}</p>
        {isCastCredit(movie) ? (
          <p className="character">as {movie.character}</p>
        ) : (
          <p className="job">{movie.job}</p>
        )}
      </div>
      <p>{getReleaseYear(movie)}</p>
    </Link>
  );
}
