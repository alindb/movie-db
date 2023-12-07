import Dropdown from "react-bootstrap/Dropdown";
import { Movie } from "../../../typescript/interfaces";
import { getReleaseYear } from "../../../utils/string";
import { useNavigate } from "react-router-dom";
import { PosterImg } from "../../PosterImg";

export default function MovieItem({
  movie,
  preNavigate,
}: {
  movie: Movie;
  preNavigate: () => void;
}) {
  const navigate = useNavigate();

  const onClick = () => {
    preNavigate();
    navigate(`/movie/${movie.id}`);
  };

  return (
    <Dropdown.Item as="button" onClick={onClick} className="list-item-movie">
      <PosterImg path={movie.poster_path} alt={movie.original_title} />
      <div>
        <span className="title">{movie.original_title}</span>
        <span>{getReleaseYear(movie)}</span>
        <span>Movie</span>
      </div>
    </Dropdown.Item>
  );
}
