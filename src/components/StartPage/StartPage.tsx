import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PosterImg from "components/PosterImg";
import Rating from "components/MovieDetails/components/Rating";
import { Movie } from "typescript/interfaces";
import "./StartPage.scss";

export default function StartPage() {
  const { trendingMovies } = useLoaderData() as { trendingMovies: Movie[] };

  useEffect(() => {
    document.title = `Movie DB | Start page`;
  }, []);

  return (
    <div className="start-page">
      <h3 className="mb-2">Trending movies</h3>
      <ul className="trending-movies">
        {trendingMovies.map((movie) => (
          <li>
            <Link to={`/movie/${movie.id}`}>
              <PosterImg
                path={movie.poster_path}
                alt={movie.original_title}
                size="w342"
              />
              <div>
                <p className="title">{movie.original_title}</p>
                <p className="release-date">{movie.release_date}</p>
              </div>
              <Rating movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
