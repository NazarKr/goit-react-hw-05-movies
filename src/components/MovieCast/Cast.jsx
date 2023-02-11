import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCast } from "shared/api/fetchApi";
import NotFound from "../../pages/NotFound";
import imageplaceholder from '../../assets/images/noposter.jpg';
import { CastTitle, CastImg, CastInfoSpan, CastInfoText, CastkUl, Castkli } from "./Cast.styled";

const Mission = () => {
    const [movieCast, setMovieCast] = useState([]);
    const [error, setError] = useState(false);
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
            <CastTitle>Actors from the movie</CastTitle>
            {error && <NotFound />}
            <div>
                {movieCast.length ? (
                <CastkUl>
                    {movieCast.slice(0, 12).map(actor => (
                        <Castkli key={actor.cast_id}>
                            <CastImg
                                src={
                                actor.profile_path
                                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                                    : imageplaceholder
                            }
                                alt={`${actor.name}`} />
                            <div>
                                <CastInfoText>{actor.name}</CastInfoText>
                                <p>Character: <br/>
                                    <CastInfoSpan>{actor.character}</CastInfoSpan></p>

                            </div>
                        </Castkli>
                    ))}
                </CastkUl>
                ) : (
                    <p>No results</p>
                )}
            </div>

        </section>
    );
};

export default Mission;
