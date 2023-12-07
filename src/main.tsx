import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.tsx";
import { ActorDetails } from "./components/ActorDetails.tsx";
import MovieDetails from "./components/MovieDetails";
import { loader as movieLoader } from "./components/MovieDetails/loader";
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
        path: "actor/:actorId",
        element: <ActorDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
