import { useSearchParams, useLocation } from "react-router-dom";
import { SearchBox } from "components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
// import MovieList from "components/MovieList/MovieList";
import { NavLink } from "react-router-dom";
import MovieItem from "components/MovieItem/MovieItem";

import { fetchMovies } from "shared/api/fetchApi";
import { PaginationStyled } from "shared/Pagination/Pagination.styled";
import { Container, CardWrapper } from "../components/MovieList/MovieList.styled";
import { toast } from 'react-toastify';

//searchMovie
const Movies = () => {
    const [movieFound, setMovieFound] = useState([]);
    const [searchMovie, setSearchMovie] = useSearchParams();
    const query = searchMovie.get('search');
    const currentPage = Number(searchMovie.get('page'))
        ? Number(searchMovie.get('page'))
        : 1;
    const [input, setInput] = useState(query ?? '');
    const location = useLocation();
    const [totalPages, setTotalPages] = useState(0);


    useEffect(() => {
        if (!query) {
            return;
        }

        fetchMovies(query, currentPage)
            .then(data => {
                if (!data.results.length) {
                    return toast.error('noResults');
                } else {
                    setTotalPages(data.total_pages);
                    setMovieFound([...data.results]);
                }
            })
            .catch(error => console.log(error));
    }, [currentPage, query]);

    const onSearchInput = event => {
        setInput(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!input.trim()) {
            return toast.error('emptyQuery');
        }
        if (input.trim() !== query) {
            setMovieFound([]);
            setSearchMovie({ search: input.trim(), page: 1 });
        }
    };

    const handlePageClick = e => {
        setSearchMovie({ search: input, page: e.selected + 1 });
    };


    return (
        <main>
            <h2>Our mission</h2>
            <SearchBox
                handleSubmit={handleSubmit}
                value={input}
                onSearchInput={onSearchInput}
            />

            <Container>
                {movieFound.map(movie => (
                    <CardWrapper key={movie.id}>
                        <NavLink to={`${movie.id}`} state={{ from: location }}>
                            <MovieItem movie={movie} />
                        </NavLink>
                    </CardWrapper>
                ))}
            </Container>

            {totalPages > 1 && (
                <PaginationStyled
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    disabledLinkClassName="disabled"
                    activeClassName="activePage"
                    forcePage={currentPage - 1}
                />
            )}
        </main>
    );
};

export default Movies;
