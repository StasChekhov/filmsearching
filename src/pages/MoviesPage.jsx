import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import * as movieApi from "../components /services/MovieAPI";
import s from "./pages.module.css";

export default function MoviesPage() {
 const [search, setSearch] = useState("");
 const [movie, setMovie] = useState([]);

 const location = useLocation();
 const [searchParams, setSearchParams] = useSearchParams();

 const queryName = searchParams.get("query") || "";

 const onSubmit = (e) => {
  e.preventDefault();
  setSearchParams({ query: search });
 };
 const onInputChange = (event) => {
  setSearch(event.currentTarget.value.toLowerCase());
 };

 useEffect(() => {
  movieApi
   .fetchMovieByKeyWord(queryName)
   .then((data) => setMovie(data.results));
 }, [queryName]);

 return (
  <>
   <form onSubmit={onSubmit}>
    <input
     type="search"
     className={s.input}
     placeholder="Search..."
     value={search}
     onChange={onInputChange}
     pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    />
    <button type="submit" className={s.button}>
     Search
    </button>
   </form>
   <ul className={s.formList}>
    {movie &&
     movie.map((mov) => (
      <li key={mov.id}>
       <Link
        to={`/movies/${mov.id}`}
        state={{ from: location }}
        className={s.linkMovie}
       >
        {mov.original_title}
       </Link>
      </li>
     ))}
   </ul>
  </>
 );
}
