import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as movieApi from "../components /services/MovieAPI";
import s from "./pages.module.css";

export default function Cast() {
 const { movieId } = useParams();
 const [cast, setCast] = useState([]);

 useEffect(() => {
  movieApi.fetchMovieCredits(movieId).then(({ cast }) => setCast(cast));
 }, [movieId]);
 console.log(cast);
 return (
  <>
   <ul className={s.listOfCasts}>
    {cast &&
     cast.map((cas) => (
      <li key={cas.id}>
       <img
        src={
         cas.profile_path ? (
          `https://www.themoviedb.org/t/p/w185${cas.profile_path}`
         ) : (
          <p>Photo</p>
         )
        }
        alt={<p>photo</p>}
        width="100px"
       />
       <h3>{cas.name}</h3>
       <p>Character: {cas.character}</p>
      </li>
     ))}
   </ul>
  </>
 );
}
