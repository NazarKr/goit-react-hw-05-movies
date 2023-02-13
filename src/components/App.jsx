import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from "shared/Loader/Spinner";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("../components/MovieCast/Cast"));
const Reviews = lazy(() => import("../components/MovieReviews/Reviews"));
const About = lazy(() => import("../pages/About"))
const NotFound = lazy(() => import("../pages/NotFound"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div><Spinner /></div>}>
        {/* <Outlet /> */}

      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default App;