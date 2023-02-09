import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import Spinner from "shared/Loader/Spinner";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Logo>
                    <span role="img" aria-label="computer icon">
                        💻
                    </span>{" "}
                    MovieTeca
                </Logo>
                <nav>
                    <Link to="/" end>Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <Suspense fallback={<Spinner/>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};
