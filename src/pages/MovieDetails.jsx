import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import movie from "./movie.json";
import styles from "./MovieDetails.module.css";


export function MovieDetails() {
    const { movieId } = useParams(); /* hook para poder pasar el id de cada peli, movieId es como le he llamado en App */
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        get("/movie/" + movieId).then(data => {
            setMovie(data);
        })
    }, [movieId]) /* movieId debe ponerse aqui porque es el valor que cambia del efecto */

    if (!movie) {
        return null;
    }
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title: </strong>{movie.title}</p>
                <p><strong>Genres: </strong>
                    {movie.genres.map((genre) => genre.name).join(", ")} {/* funcion que pasa el array de objetos a elementos unicos, el join sirve para separar, en este caso por coma y espacio */}
                </p>
                <p><strong>Description: </strong>{movie.overview}</p>
            </div>
        </div>
    );
}