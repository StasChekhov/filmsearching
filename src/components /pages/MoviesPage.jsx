
// import * as movieApi from '../services/MovieAPI';
import s from './pages.module.css';
import { useState } from 'react';

export default function MoviesPage() {
    const [search, setSearch] = useState('');

    const onSubmit = e => {
        e.preventDefault();
    }
    const onInputChange = event => {
        setSearch(event.currentTarget.value.toLowerCase());
    }
    return ( 
        <form onSubmit={onSubmit}>
            <input
                type="text"
                className={s.input}
                placeholder="Search..."
                value={search}
                onChange={onInputChange}

            />
            <button type="submit" className={ s.button}>Search</button>
        </form>
     );
}
 
