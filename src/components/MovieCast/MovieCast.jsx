import Loader from '../../components/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesCats } from '../../cinema-api';

export default function MovieCast() {
    const [movieCast, setMovieCast] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        async function getCinema() {
            try {
                setError(false);
                setLoading(true);
                const data = await MoviesCats(movieId);
                // console.log(data.cast);
                setMovieCast(data.cast);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCinema();
    }, [movieId]);

    return (
        <>
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
            <ul>
                {movieCast.map(cast => {
                    return <li key={cast.id}>{cast.name}</li>;
                })}
            </ul>
        </>
    );
}
