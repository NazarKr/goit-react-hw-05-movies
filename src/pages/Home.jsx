import MovieList from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { fetchTrending } from '../shared/api/fetchTrending'
import { PaginationStyled } from "shared/api/Pagination/Pagination.styled";


const Home = () => {
    const [trends, setTrends] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useSearchParams();
    const currentPage = Number(searchQuery.get('page'))
        ? Number(searchQuery.get('page'))
        : 1;


    useEffect(() => {
        fetchTrending(currentPage)
            .then(data => {
 
                setTrends(data.results);
                setTotalPages(data.total_pages);

            })
            .catch(error => console.log(error));
    }, [ currentPage, setSearchQuery]);

    const handlePageClick = e => {
        setSearchQuery({ page: e.selected + 1 });
    };    

    return (
        <main>
            <h1>Trending today</h1>
            {/* {loading && <p>loaad....</p>} */}
            <ul>
                <MovieList trends={trends} />

            </ul>

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

export default Home;
