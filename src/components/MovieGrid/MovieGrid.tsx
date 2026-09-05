import css from "./MovieGrid.module.css";
import type Movie from "../../types/movie";
import { useState } from "react";
import MovieModal from "../MovieModal/MovieModal";

interface MovieGridProps{
    onSelect: (movie: Movie) => void;
    movies: Movie[],
}
export default function MovieGrid( {onSelect  , movies } : MovieGridProps) {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const openModal = () => setIsModalOpen(true);
 
 const closeModal = () => setIsModalOpen(false);
 
  return (
    <div>
    <ul className={css.grid}>
      {movies.map((movie) => (
      <li onClick={() => onSelect(movie)}>
        <div className={css.card}>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title}`}
            loading="lazy"
          />
          <h2 className={css.title}>{movie.title}</h2>
           {/* {isModalOpen && <MovieModal onClose={closeModal} movie={movie}/>} */}
        </div>
      </li>
      ))}
    </ul>
    </div>
    
  );
}
