import { useEffect, useState, useRef, Suspense } from "react";
import { useLocation, useParams, Outlet } from "react-router-dom";
import { fetchMoviesDetails } from "shared/api/fetchApi";
import { BackLink } from "shared/BackLinkButton/BackLink";
import Spinner from "shared/Loader/Spinner";
import imageplaceholder from '../../assets/images/noposter.jpg';
import NotFound from "../NotFound";
import { ContainerMovie, MovieImg, MovieInfo, MovieInfoText, MovieInfoSpan, MovieNav, MovieLink } from "./MovieDetails.styled"

const MovieDetails = () => {
    const [movieItem, setMovieItem] = useState(null);
    const [error, setError] = useState(false);
    const location = useLocation();
    const params = useParams();
    const backLinkHref = useRef(location.state?.from ?? '/');

    useEffect(() => {
        fetchMoviesDetails(params.movieId)
            .then(data => {
                setMovieItem(data);
            })
            .catch(error => {
                setError(true);
            });
    }, [params.movieId]);

    return (
        <main>
            <BackLink to={backLinkHref.current}>Back to list</BackLink>
            <div>
                {error && <NotFound />}

                {movieItem && (
                    <ContainerMovie>
                        <MovieImg
                            src={
                                movieItem.poster_path
                                    ? `https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`
                                    : imageplaceholder
                            }
                            alt={`${movieItem.title}`} />
                        <MovieInfo>
                            <MovieInfoText>Title: <MovieInfoSpan>{movieItem.title}</MovieInfoSpan></MovieInfoText>
                            <MovieInfoText>Genre:<MovieInfoSpan>{movieItem.genres.map(genre => genre.name).join(', ')}</MovieInfoSpan></MovieInfoText>
                            <MovieInfoText>Release date: <MovieInfoSpan>{movieItem.release_date}</MovieInfoSpan></MovieInfoText>
                            <MovieInfoText>Popularity: <MovieInfoSpan>{movieItem.popularity}</MovieInfoSpan></MovieInfoText>
                            <MovieInfoText>About:<MovieInfoSpan>{movieItem.overview}</MovieInfoSpan></MovieInfoText>
                        </MovieInfo>
                    </ContainerMovie>
                )}
                <div>
                    <MovieNav>
                        <MovieLink to="cast">Cast</MovieLink>
                        <MovieLink to="reviews">Reviews</MovieLink>
                    </MovieNav>
                    <Suspense fallback={<div><Spinner /></div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}

export default MovieDetails;