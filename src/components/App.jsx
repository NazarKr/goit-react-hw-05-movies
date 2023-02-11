import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <Routes>
        <Route path="goit-react-hw-05-movies/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route path="goit-react-hw-05-movies/movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="goit-react-hw-05-movies/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;