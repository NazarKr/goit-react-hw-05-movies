import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import Spinner from "shared/Loader/Spinner";
import LanguageSwitcher from "modules/LanguageSwitcher/LanguageSwitcher";
import useLang from "shared/hooks/useLang";
import locale from "./locale .json";

export const SharedLayout = () => {
    const { lang } = useLang();

    const home = locale.home[lang];
    const movie = locale.movie[lang];
    const about = locale.about[lang];



    return (
        <Container>
            <Header>
                <Logo>
                    <Link to="/"  role="img" aria-label="computer icon">
                        💻 MovieTeca
                    </Link>
                </Logo>
                <nav>
                    <Link to="/" end>{home}</Link>
                    <Link to="/movies">{movie}</Link>
                    <Link to="/about">{about}</Link>
                </nav>
                <LanguageSwitcher/>
            </Header>
            <Suspense fallback={<Spinner/>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};
