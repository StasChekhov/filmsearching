import { useState, useEffect } from "react";
import {  Link, Route, Routes, useParams } from "react-router-dom";
import * as movieApi from '../services/MovieAPI';
import Cast from "./Cast";

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
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                <li>Reviews</li>
                </ul>
            </>
            }
            <Routes>
              <Route path="cast" element={<Cast />} />
              
            </Routes>
          
        </>
    )
}