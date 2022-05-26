import { useState, useEffect } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import * as movieApi from "../services/MovieAPI";
import Cast from "./Cast";
import Reviews from "./Reviews";
import s from "./pages.module.css";

export default function MoviesDetailsPage() {
 const [movie, setMovie] = useState(null);
 const { movieId } = useParams();

 const location = useLocation();
 //  const navigate = useNavigate();

 useEffect(() => {
  movieApi.fetchMovieDetails(movieId).then(setMovie);
 }, [movieId]);

 // console.log(movie);

 return (
  <>
   <button type="button">
    <Link to={location.state.from ?? "/"} className={s.linkMovie}>
     Back
    </Link>
   </button>
   {movie && (
    <>
     <div className={s.containerMovie}>
      <img
       src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
       alt=""
       width="300px"
       height="350px"
      />

      <div className={s.filmInformation}>
       <h1 className={s.titleMovie}>{movie.title}</h1>
       <p>User score: {movie.vote_average}</p>
       <h3>Overview</h3>
       <p>{movie.overview}</p>
       <h3>Genres</h3>
       {movie.genres && (
        <ul className={s.genres}>
         {movie.genres.map((genre) => (
          <li key={genre.id} className={s.genresLi}>
           {genre.name}
          </li>
         ))}
        </ul>
       )}
      </div>
     </div>
     <ul className={s.additionalInformation}>
      Additional information
      <li>
       <Link
        to={`/movies/${movieId}/cast`}
        state={{ from: location.state.from }}
       >
        Cast
       </Link>
      </li>
      <li>
       <Link
        to={`/movies/${movieId}/reviews`}
        state={{ from: location.state.from }}
       >
        Reviews
       </Link>
      </li>
     </ul>
    </>
   )}
   <Routes>
    <Route path="cast" element={<Cast />} />
    <Route path="reviews" element={<Reviews />} />
   </Routes>
  </>
 );
}
