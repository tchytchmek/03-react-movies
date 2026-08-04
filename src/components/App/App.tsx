import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import "./App.module.css";
import fetchMovies from "../../services/movieServices";
import toast from "react-hot-toast";
import type Movie from "../../types/movie";
import { useState } from "react";

// interface MovieHook {
//   movies: Movie[],
//   setMovies: (value: Movie[]) => void,
// }
function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getTopic = async (topic: string) => {
    try {
      const data = await fetchMovies(topic);

      if (data.length === 0) {
        toast.error("No movies found for your request.");
      }

      setMovies(data);
    } catch {
      toast.error("No movies found for your request.");
    } finally {
    }
  };
  return (
    <>
      <SearchBar onSubmit={getTopic} />
      {/* {movies.length != 0 && } */}
    </>
  );
}

export default App;
