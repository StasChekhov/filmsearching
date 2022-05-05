// import * as movieApi from '../services/MovieAPI';
import s from "./pages.module.css";
import { useEffect, useState } from "react";
import * as movieApi from "../services/MovieAPI";
import { Link } from "react-router-dom";

export default function MoviesPage() {
 const [search, setSearch] = useState("");
 const [movie, setMovie] = useState([]);

 const onSubmit = (e) => {
  e.preventDefault();
 };
 const onInputChange = (event) => {
  setSearch(event.currentTarget.value.toLowerCase());
 };
 useEffect(() => {
  if (search) {
   movieApi.fetchMovieByKeyWord(search).then((data) => setMovie(data.results));
  }
 }, [search]);
 console.log(movie);
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
   <ul>
    {movie &&
     movie.map((mov) => (
      <li key={mov.id}>
       <Link to={`/movies/${mov.id}`}>{mov.original_title}</Link>
      </li>
     ))}
   </ul>
  </>
 );
}
