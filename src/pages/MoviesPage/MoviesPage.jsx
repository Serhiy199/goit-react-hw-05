import { MovieSearch } from '../../cinema-api';
import Loader from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';
import MoviesList from '../../components/MovieList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { searchButton, searchInput } from './MoviesPage.module.css';

export default function MoviesPage() {
    const [movieSearch, setMovieSearch] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [querySearch, setQuerySearch] = useSearchParams();

    const value = querySearch.get('query') ?? '';

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
            <h2>Search movies</h2>
            <form onSubmit={moviesFilter}>
                <input className={searchInput} type="text" name="moviesSearch" />
                <button className={searchButton} type="submit">
                    Search
                </button>
            </form>
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
            <MoviesList movie={movieSearch} />;
        </>
    );
}
