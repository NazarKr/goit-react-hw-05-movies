import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCast } from "shared/api/fetchApi";
import NotFound from "../../pages/NotFound";
import imageplaceholder from '../../assets/images/noposter.jpg';

const Mission = () => {
    const [movieCast, setMovieCast] = useState([]);
    const [error, setError] = useState(false);
    // const location = useLocation();
    const params = useParams();

    useEffect(() => {
        fetchMoviesCast(params.movieId)
            .then(data => {
                setMovieCast(data.cast);
            })
            .catch(error => {
                setError(true);
            });
    }, [params.movieId]);

    return (
        <section>
            <h2>Our mission</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, nesciunt
                veniam. Excepturi itaque, voluptates fugiat perspiciatis quo saepe! Iste
                eaque porro eveniet error dicta, modi ipsum hic quis minima inventore.
            </p>

            {error && <NotFound />}

            <div>
                <ul>
                    {movieCast.map(actor => (
                        <li key={actor.cast_id}>
                            <img
                                width={200}
                                src={
                                actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                                    : imageplaceholder
                            }
                                alt={`${actor.name}`} />
                            <div>
                                <p>{actor.character}</p>
                                <p>{actor.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>

        </section>
    );
};

export default Mission;
