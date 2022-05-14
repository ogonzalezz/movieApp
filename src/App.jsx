import { MoviesGrid } from "./components/MoviesGrid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export function App() {
    return (
    <Router>
        <Navbar className={styles.nav} expand="lg" sticky="top">
            <Container>
                <Link to="/Home"><h1 className={styles.title}>Movies</h1></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="m-2" to="/Action"><h3 className={styles.title}>Action</h3></Link>
                        <Link className="m-2" to="/Drama"><h3 className={styles.title}>Drama</h3></Link>
                        <Link className="m-2" to="/Comedy"><h3 className={styles.title}>Comedy</h3></Link>
                        <Link className="m-2" to="/Sci-fi"><h3 className={styles.title}>Sci-fi</h3></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <main>
            <Switch>
                <Route exact path="/movies/:movieId"> {/* los dos puntos hacen que sea dinamico y que la info pueda llegar a movieDetails */}
                    <MovieDetails /></Route>
                <Route path="/:genre">
                    <LandingPage />
                </Route>
            </Switch>
        </main>
    </Router>
    );
}