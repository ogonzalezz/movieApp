import styles from './MovieCard.module.css';
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function MovieCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <Card bg="dark" className="text-center">
            <Link to={"/movies/" + movie.id}>
                <Card.Img variant="top" width={230} height={345} className={styles.movieImage} src={imageUrl} alt={movie.title}/>
                <Card.Body>
                    <div>{movie.title}</div>
                </Card.Body>
            </Link>
        </Card>
/*         <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img width={230} height={345} className={styles.movieImage} src={imageUrl} alt={movie.title} />
                <div>{movie.title}</div>
            </Link>
        </li> */
    );
}