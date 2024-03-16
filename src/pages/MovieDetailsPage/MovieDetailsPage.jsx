import { useState, useEffect, useParams } from 'react';
import Loader from '../../components/Loader';
import CinemaId from '../../cinema-api';

export default function MovieDetailsPage() {
    const [movieDetailsPage, setMovieDetailsPage] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        async function getCinema() {
            try {
                setError(false);
                setLoading(true);
                const data = await CinemaId(movieId);
                console.log(data);
                setMovieDetailsPage(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCinema();
    }, [movieId]);

    return (
        <main>
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
            {<div>Yes render</div>}
        </main>
    );
}
