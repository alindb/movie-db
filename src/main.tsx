import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.tsx";
import { PersonDetails } from "./components/PersonDetails/PersonDetails.tsx";
import MovieDetails from "./components/MovieDetails";
import { loader as movieLoader } from "./components/MovieDetails/loader";
import { loader as personLoader } from "./components/PersonDetails/loader";
import { SearchResult } from "./components/SearchResult.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "search/:query",
        element: <SearchResult />,
      },
      {
        path: "movie/:movieId",
        element: <MovieDetails />,
        loader: movieLoader,
      },
      {
        path: "person/:personId",
        element: <PersonDetails />,
        loader: personLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
