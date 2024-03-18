import { MovieSearch } from '../../cinema-api';
import Loader from '../../components/Loader';
import { useState, useEffect } from 'react';
import MoviesList from '../../components/MovieList/MoviesList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
    const [movieSearch, setMovieSearch] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [querySearch, setQuerySearch] = useSearchParams();

    const value = querySearch.get('query') ?? '';
    // const location = useLocation();

    useEffect(() => {
        async function getCinema() {
            try {
                setError(false);
                setLoading(true);
                const data = await MovieSearch(value);
                // console.log(data);
                setMovieSearch(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCinema();
    }, [value]);

    const moviesFilter = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const query = form.elements.moviesSearch.value.toLowerCase();
        querySearch.set('query', query);
        setQuerySearch(querySearch);
        form.reset();
    };
    console.log(movieSearch.length);
    return (
        <>
            <form onSubmit={moviesFilter}>
                <input type="text" name="moviesSearch" />
                <button type="submit">Search</button>
            </form>

            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
            <ul>
                {movieSearch.map(list => {
                    return <MoviesList key={list.id} onList={list} />;
                })}
            </ul>
        </>
    );
}
