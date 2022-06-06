import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as movieApi from "../components /services/MovieAPI";
import s from "./pages.module.css";

export default function HomePage() {
 const [trends, setTrends] = useState([]);
 const location = useLocation();

 useEffect(() => {
  movieApi.fetchTrendingMovies().then((data) => {
   setTrends((trends) => [...trends, ...data.results]);
  });
 }, []);

 return (
  <>
   <main>
    <h1>Trending today</h1>
    <ul className={s.ulHome}>
     {trends &&
      trends.map((trend) => (
       <li key={trend.id} className={s.liHome}>
        <Link
         to={`/movies/${trend.id}`}
         state={{ from: location }}
         className={s.linkHome}
        >
         {trend.title}
        </Link>
       </li>
      ))}
    </ul>
   </main>
  </>
 );
}
