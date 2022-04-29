import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as movieApi from '../services/MovieAPI'
import s from './pages.module.css';


export default function HomePage() {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        movieApi.fetchTrendingMovies().then(data => {
            setTrends(trends => [...trends, ...data.results])
        })  
    }, [])
    
    return (
        <> 
            <main>
                <h1>Trending today</h1>
                <ul className={s.ulHome}>
                    {trends && trends.map(trend => (
                        <li key={trend.id} className={s.liHome}>
                            <Link
                                className={s.linkHome}
                                // state={{from:location}}
                                to={`/movies/${trend.id}`}>
                                {trend.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}
 
