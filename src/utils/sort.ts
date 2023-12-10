import { Movie } from "typescript/interfaces";

export const sortOnReleaseDate = (movieA: Movie, movieB: Movie) => {
  const dateA = new Date(movieA.release_date);
  const dateB = new Date(movieB.release_date);
  // if (!dateA && dateB) return -1;
  // if (!dateB && dateA) return 1;
  // if (!dateA && !dateB) return 0;
  return dateB.getTime() - dateA.getTime();
};
