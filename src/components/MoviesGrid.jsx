import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { useParams } from "react-router";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient";

export function MoviesGrid() { /* las funciones de react no pueden hacer llamadas a apis directamente, para ello se usa el useEffect, un hook de react */

    const [movies, setMovies] = useState([]); /* useState es otro hook */ /* en la primera posicion pasamos las peliculas y en la segunda la funcion para poder cambiarlas*/
    const { genre } = useParams(); /* hook para poder pasar el id de cada peli, movieId es como le he llamado en App */
    let movieGenre = "/discover/movie?with_genres=14&sort_by=popularity.desc";

    if (genre === 'Drama') {
        movieGenre = "/discover/movie?with_genres=18&sort_by=popularity.desc";
    } else if (genre === 'Action') {
        movieGenre = "/discover/movie?with_genres=28&sort_by=popularity.desc";
    } else if (genre === 'Comedy') {
        movieGenre = "/discover/movie?with_genres=35&sort_by=popularity.desc";
    } else if (genre === 'Sci-fi') {
        movieGenre = "/discover/movie?with_genres=878&sort_by=popularity.desc";
    } else if (genre === 'Home') {
        movieGenre = "/discover/movie?with_genres=14&sort_by=popularity.desc";
    }
    
    useEffect(() => {
        get(movieGenre).then((data) => {
            setMovies(data.results);
        });
    }, [movieGenre]);
    
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => //movies es el nombre del json con la info, map convierte cada elemento en un li en este caso
                <MovieCard key={movie.id} movie={movie} /> //react pide que haya un key para optimizar
            )}
        </ul>
    );
}