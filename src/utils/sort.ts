import { Movie } from "../typescript/interfaces";

export const sortOnReleaseDate = (movieA: Movie, movieB: Movie) => {
  const dateA = new Date(movieA.release_date);
  const dateB = new Date(movieB.release_date);
  return dateB.getTime() - dateA.getTime();
};
