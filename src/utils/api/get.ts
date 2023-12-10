import { Person, Movie, TV } from "typescript/interfaces";

const token = import.meta.env.VITE_ACCESS_TOKEN;

export const searchAll = async (
  query?: string
): Promise<(Person | Movie)[]> => {
  return fetch(`https://api.themoviedb.org/3/search/multi?query=${query}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) =>
      res.results.filter(
        (result: Person | Movie | TV) =>
          result.media_type === "person" || result.media_type === "movie"
      )
    )
    .then((res) => res.slice(0, 8));
};

export const getTrending = async (): Promise<Movie[]> => {
  return fetch(`https://api.themoviedb.org/3/trending/movie/day`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res.results.slice(0, 8));
};

export const getMovie = async (movieId: string): Promise<Movie> => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits,reviews`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res.json());
};

export const getPerson = async (personId: string): Promise<Person> => {
  return fetch(
    `https://api.themoviedb.org/3/person/${personId}?append_to_response=movie_credits`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res.json());
};
