import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppBar from "./AppBar";

const HomePage = lazy(() =>
  import("./HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() => import("./MoviesPage"));
const MovieDetailsPage = lazy(() => import("./MovieDetailsPage"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));
const NotFoundView = lazy(() => import("./NotFoundView"));

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
  );
}
