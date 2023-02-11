import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesReviews } from "shared/api/fetchApi";
import NotFound from "../../pages/NotFound";
import { ReviewsUl, ReviewsInfoText, ReviewsInfoP } from "./Reviews.styled";

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
            <h2>Review</h2>

            {error && <NotFound />}

            <div>
                {movieReviews.length ?( 
                <ReviewsUl>
                    {movieReviews.map(review => (
                        <li key={review.id}>
                            <div>
                                <ReviewsInfoText>{review.author}</ReviewsInfoText>
                                <ReviewsInfoP>{review.content}</ReviewsInfoP>
                            </div>
                        </li>
                    ))}
                    </ReviewsUl>) : (
                    <p>No results</p>
                )}

            </div>

        </section>
    );
};

export default Reviews;
