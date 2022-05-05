import { useState, useEffect } from "react";
import {  Link, Route, Routes, useParams } from "react-router-dom";
import * as movieApi from '../services/MovieAPI';
import Cast from "./Cast";
import Reviews from "./Reviews";

// import s from './pages.module.css';


export default function MoviesDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    

    useEffect(() => {
        movieApi.fetchMovieDetails(movieId).then(setMovie);
       
    },[movieId])

//   console.log(movie)
    return (
        <>
            {movie && <>
            <h1>{ movie.title }</h1>
            <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" width="200px" />
            </div>
                <p>User score: { movie.vote_average}</p>
            <h2>Overview</h2>
            <p></p>
            <h3>Genres</h3>
                {movie.genres && (
                    <ul>
                        {movie.genres.map(genre => (
                            <li key={genre.id}>{ genre.name }</li>
                        ))} 
                    </ul>
                )}
             <ul>
                <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
                <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
            </ul>
            </>
            }
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          
        </>
    )
}