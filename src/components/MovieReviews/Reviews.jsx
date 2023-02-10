import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesReviews } from "shared/api/fetchApi";
import NotFound from "../../pages/NotFound";

const Reviews = () => {
    const [movieReviews, setMovieReviews] = useState([]);
    const [error, setError] = useState(false);
    // const location = useLocation();
    const params = useParams();

    useEffect(() => {
        fetchMoviesReviews(params.movieId)
            .then(data => {
                setMovieReviews(data.results);
                    //   console.log(data.results);
            })
            .catch(error => {
                setError(true);
            });
    }, [params.movieId]);

    return (
        <section>
            <h2>Our mission</h2>

            {error && <NotFound />}

            <div>
                <ul>
                    {movieReviews.map(review => (
                        <li key={review.id}>
                            <div>
                                <p>{review.author}</p>
                                <p>{review.content}</p>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>

        </section>
    );
};

export default Reviews;
