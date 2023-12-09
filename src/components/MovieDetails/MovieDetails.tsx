import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PosterImg from "components/PosterImg";
import Rating from "./components/Rating";
import Credits from "./components/Credits";
import Reviews from "./components/Reviews";
import { getReleaseYear, getRuntime } from "utils/string";
import { Movie } from "typescript/interfaces";
import { IMG_BASE_URL } from "assets/constants";
import "./MovieDetails.scss";

export default function MovieDetails() {
  const { movie } = useLoaderData() as { movie: Movie };

  useEffect(() => {
    document.title = `Movie DB | ${movie.original_title}`;
  }, [movie]);

  return (
    <>
      <img
        className="backdrop"
        src={`${IMG_BASE_URL}w1280${movie.backdrop_path}`}
        alt={movie.original_title}
      />
      <div className="movie-details">
        <div className="movie-details-header">
          <PosterImg
            path={movie.poster_path}
            alt={movie.original_title}
            size="w342"
          />
          <div>
            <h2>{movie.original_title}</h2>
            <i className="fa-regular fa-calendar" />
            <span>{getReleaseYear(movie)}</span>
            <i className="fa-regular fa-clock" />
            <span>{getRuntime(movie)}</span>
          </div>
          <Rating movie={movie} />
        </div>
        <div className="movie-details-body">
          {movie.genres.map((genre) => (
            <div key={genre.id} className="genre">
              {genre.name}
            </div>
          ))}
          {movie.tagline && (
            <p className="tagline">
              <i>{movie.tagline}</i>
            </p>
          )}
          <h4>Overview</h4>
          <p className="overview">{movie.overview}</p>
          <Credits credits={movie.credits} />
          <Reviews reviews={movie.reviews} />
        </div>
      </div>
    </>
  );
}
