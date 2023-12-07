import { Actor, Movie, TV } from "../../typescript/interfaces";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDg2YWY5NTBkOTBkYjY0NjQ2NWNjMDcyZTNkZGM5YiIsInN1YiI6IjY1NzA0YThmZDE4ZmI5MDk1N2EyOTQ0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A73cPKE1M-650wjSN4PAIZEqGgt4jchsFKLYsuyqwu0";

export const searchAll = async (query?: string): Promise<(Actor | Movie)[]> => {
  return fetch(`https://api.themoviedb.org/3/search/multi?query=${query}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) =>
      res.results.filter(
        (result: Actor | Movie | TV) =>
          result.media_type === "person" || result.media_type === "movie"
      )
    )
    .then((res) => res.slice(0, 8));
};

const getCredits = async (movieId: string) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const getReviews = async (movieId: string) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

const getMovieDetails = async (movieId: string) => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const getMovie = async (movieId: string): Promise<Movie> => {
  return Promise.all([
    getMovieDetails(movieId),
    getCredits(movieId),
    getReviews(movieId),
  ]).then(([movieDetails, credits, reviews]) => ({
    ...movieDetails,
    credits,
    reviews,
  }));
};
