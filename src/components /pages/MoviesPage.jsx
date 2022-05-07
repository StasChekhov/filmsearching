import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import * as movieApi from "../services/MovieAPI";
import s from "./pages.module.css";

export default function MoviesPage() {
 const [search, setSearch] = useState("");
 const [movie, setMovie] = useState([]);
 const [debounceSearch] = useDebounce(search, 300);

 const onSubmit = (e) => {
  e.preventDefault();
 };
 const onInputChange = (event) => {
  setSearch(event.currentTarget.value.toLowerCase());
 };
 useEffect(() => {
  if (debounceSearch) {
   movieApi.fetchMovieByKeyWord(search).then((data) => setMovie(data.results));
  }
 }, [debounceSearch]);

 return (
  <>
   <form onSubmit={onSubmit}>
    <input
     type="text"
     className={s.input}
     placeholder="Search..."
     value={search}
     onChange={onInputChange}
    />
    <button type="submit" className={s.button}>
     Search
    </button>
   </form>
   <ul className={s.formList}>
    {movie &&
     movie.map((mov) => (
      <li key={mov.id}>
       <Link to={`/movies/${mov.id}`} className={s.linkMovie}>
        {mov.original_title}
       </Link>
      </li>
     ))}
   </ul>
  </>
 );
}
