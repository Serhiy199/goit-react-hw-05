import { useState, useEffect } from 'react';
import favoriteCinemaDay from '../../cinema-api';
import css from './HomePage.module.css';
import Loader from '../../components/Loader';
import MoviesList from '../../components/MovieList/MoviesList';

export default function HomePage() {
    const [favoritCinema, setFavoritCinema] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getCinema() {
            try {
                setError(false);
                setLoading(true);
                const data = await favoriteCinemaDay();

                setFavoritCinema(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCinema();
    }, []);

    return (
        <>
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
            <ul>
                {favoritCinema.map(list => {
                    return <MoviesList key={list.id} onList={list} />;
                })}
            </ul>
        </>
    );
}
