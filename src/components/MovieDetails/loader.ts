import { LoaderFunctionArgs } from "react-router-dom";
import { getMovie } from "utils/api/get";
import { Movie } from "typescript/interfaces";

export async function loader({
  params,
}: LoaderFunctionArgs): Promise<{ movie: Movie }> {
  if (!params.movieId) throw new Error("No movieId provided");
  const movie = await getMovie(params.movieId);
  return { movie };
}
