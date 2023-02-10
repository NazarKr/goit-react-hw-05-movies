import { useEffect, useState, Suspense } from "react";
import { useLocation, useParams, Link, Outlet } from "react-router-dom";
import { fetchMoviesDetails } from "shared/api/fetchApi";
import { BackLink } from "shared/BackLinkButton/BackLink";
import imageplaceholder from '../assets/images/noposter.jpg';
import NotFound from "./NotFound";


const MovieDetails = ({ movie }) => {
    const [movieItem, setMovieItem] = useState(null);
    const [error, setError] = useState(false);
    const location = useLocation();
    const params = useParams();
    const backLinkHref = location.state?.from ?? "/movies";
    

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
            <BackLink to={backLinkHref}>Back to products</BackLink>
            <div>
                {error && <NotFound />}

                {movieItem && (
                    <div>
                        <img src={
                            movieItem.poster_path
                                ? `https://image.tmdb.org/t/p/w200/${movieItem.poster_path}`
                                : imageplaceholder
                        }
                            alt={`${movieItem.title}`} />
                        <div>
                            <p>{movieItem.title}</p>
                            <p>{movieItem.genres.map(genre => genre.name).join(', ')}</p>
                            <p>{movieItem.overview}</p>
                        </div>
                    </div>
                )}
                <div>
                    <ul>
                        <li>
                            <Link to="cast">Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                    </ul>
                    <Suspense fallback={<div>Loading subpage...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}

export default MovieDetails;