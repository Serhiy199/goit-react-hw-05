import Loader from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesReviews } from '../../cinema-api';
import { text, titleAutor } from './MovieReviews.module.css';

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
                console.log(data.results);
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
                {movieReview.length === 0 ? (
                    <p>We don't have reviews for this movie</p>
                ) : (
                    movieReview.map(review => {
                        return (
                            <li key={review.id}>
                                <h4 className={titleAutor}>Author: {review.author}</h4>
                                <p className={text}>{review.content}</p>
                            </li>
                        );
                    })
                )}
            </ul>
        </>
    );
}
