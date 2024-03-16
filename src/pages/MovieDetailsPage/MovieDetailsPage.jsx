import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import Loader from '../../components/Loader';
import { CinemaId } from '../../cinema-api';

export default function MovieDetailsPage() {
    const [movieDetailsPage, setMovieDetailsPage] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    // console.log(
    //     movieDetailsPage.genres.map(gen => {
    //         console.log(gen.name);
    //     })
    // );

    useEffect(() => {
        async function getCinema() {
            try {
                setError(false);
                setLoading(true);
                const data = await CinemaId(movieId);
                // console.log(data);
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
        <>
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
            <div>
                {' '}
                <div>
                    {' '}
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movieDetailsPage.backdrop_path}`}
                        alt=""
                    />
                </div>
                <div>
                    {' '}
                    <h2>{movieDetailsPage.title}</h2>
                    <p>User Score: {Math.round((movieDetailsPage.vote_average * 100) / 10)}%</p>
                    <h3>Overview</h3>
                    <p>{movieDetailsPage.overview}</p>
                    <h3>Genres</h3>
                    {/* {movieDetailsPage.genres} */}
                </div>
            </div>

            <div>
                <h4>Additional information</h4>
                <Link to={'cast'}>Cast</Link>
                <Link to={'reviews'}>Reviews</Link>
                <Outlet />
            </div>
        </>
    );
}
