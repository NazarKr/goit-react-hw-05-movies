import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import Spinner from "shared/Loader/Spinner";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Logo>
                    <Link to="/"  role="img" aria-label="computer icon">
                        💻 MovieTeca
                    </Link>
                </Logo>
                <nav>
                    <Link to="/" end>Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/about">About</Link>
                </nav>
            </Header>
            <Suspense fallback={<Spinner/>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};
