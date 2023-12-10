import { getTrending } from "utils/api/get";
import { Movie } from "typescript/interfaces";

export async function loader(): Promise<{ trendingMovies: Movie[] }> {
  const trendingMovies = await getTrending();
  return { trendingMovies };
}
