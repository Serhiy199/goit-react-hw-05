import Loader from '../../components/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesReviews } from '../../cinema-api';

export default function MovieReviews() {
    const [movieReview, setMovieReview] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        async function getCinema() {
            try {
                setError(false);
                setLoading(true);
                const data = await MoviesReviews(movieId);
                // console.log(data);
                setMovieReview(data.results);
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
                {movieReview.map(review => {
                    return (
                        <li key={review.id}>
                            <h5>Author: {review.author}</h5>
                            <p>{review.content}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
