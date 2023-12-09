import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "components/App.tsx";
import ErrorPage from "components/ErrorPage.tsx";
import PersonDetails from "components/PersonDetails/PersonDetails.tsx";
import MovieDetails from "components/MovieDetails";
import SearchResult from "components/SearchResult.tsx";
import { loader as movieLoader } from "components/MovieDetails/loader";
import { loader as personLoader } from "components/PersonDetails/loader";
import "./main.scss";

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

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
