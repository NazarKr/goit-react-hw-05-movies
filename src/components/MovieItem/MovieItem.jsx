import React from "react";
import imageplaceholder from '../../assets/images/noposter.jpg';

const MovieItem = ({ movie }) => {

    return (
        <>
            <img
                src={movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : imageplaceholder}
                alt={movie.original_title ?? movie.name}
                loading="lazy"
            />
            <div>
                <p>{movie.title ?? movie.name}</p>
                <p>{movie.release_date}</p>
            </div>
        </>
    )
};

export default MovieItem;