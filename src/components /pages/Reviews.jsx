import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as movieApi from "../services/MovieAPI";

export default function Reviews() {
 const { movieId } = useParams();
 const [review, setReview] = useState([]);

 useEffect(() => {
  movieApi.fetchMovieReviews(movieId).then(({ results }) => setReview(results));
 }, [movieId]);

 return (
  <>
   {review.length === 0 ? (
    <p>Sorry, we don't have any reviews for this movie</p>
   ) : (
    <ul>
     {review.map((rev) => (
      <li key={rev.id}>
       <h4>Author: {rev.author}</h4>
       <p>{rev.content}</p>
      </li>
     ))}
    </ul>
   )}
  </>
 );
}
