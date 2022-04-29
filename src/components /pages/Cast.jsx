import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as movieApi from '../services/MovieAPI';

 export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    
    useEffect(() => {
        movieApi.fetchMovieCredits(movieId).then( ({cast})  =>
        setCast(cast));
    }, [movieId]);
    console.log(cast)
    return ( 
        <>
            <ul>
                {cast && cast.map(cas => (
                <li key={cas.id}>
                     
                     <h3 >{cas.name}</h3>
                     <p>Character: {cas.character}</p>
                </li>))}
            </ul>
        </>
     );
}

