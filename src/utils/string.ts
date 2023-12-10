import { Movie } from "typescript/interfaces";

export const getReleaseYear = (movie: Movie) =>
  movie.release_date ? movie.release_date.split("-")[0] : "N/A";

export const getRuntime = (movie: Movie) =>
  `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` ||
  "Unknown runtime";

export const getParagraphs = (text: string) =>
  text
    .split(/\r\n|\n\n|\r|\n/g)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph !== "");
