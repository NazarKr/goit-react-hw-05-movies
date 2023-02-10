import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import MovieItem from "components/MovieItem/MovieItem";
import { Container, CardWrapper } from "./MovieList.styled";


const MovieList = ({ trends }) => {
    const location = useLocation();

    return (
       <Container>
        {trends.map(trend => (
            <CardWrapper key={trend.id}>
                    <NavLink to={`movies/${trend.id}`} state={{ from: location }}>
                        <MovieItem movie={trend} />
                    </NavLink>
                </CardWrapper>
            ))}
        </Container>
    )
};

export default MovieList;