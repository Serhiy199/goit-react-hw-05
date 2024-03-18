import { useState, useEffect } from 'react';
import favoriteCinemaDay from '../../cinema-api';
import { listFavMov, title } from './HomePage.module.css';
import Loader from '../../components/Loader/Loader';
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
            <h2 className={title}>A list of the most popular movies today</h2>
            <ul className={listFavMov}>
                {favoritCinema.map(list => {
                    return <MoviesList key={list.id} onList={list} />;
                })}
            </ul>
        </>
    );
}
