import { Movie } from "../typescript/interfaces";

export const getReleaseYear = (movie: Movie) =>
  movie.release_date.split("-")[0] || "Unknown release date";

export const getRuntime = (movie: Movie) =>
  `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` ||
  "Unknown runtime";
