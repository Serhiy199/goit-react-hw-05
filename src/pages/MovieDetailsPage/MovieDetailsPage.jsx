import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import Loader from '../../components/Loader';
import { CinemaId } from '../../cinema-api';
import { GoArrowLeft } from 'react-icons/go';

export default function MovieDetailsPage() {
    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

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
                if (!movieId) return;
                setError(false);
                setLoading(true);
                const data = await CinemaId(movieId);
                // console.log(data.genres);
                setMovieDetailsPage(data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCinema();
    }, [movieId]);
    let genres = movieDetailsPage.genres;

    return (
        <>
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
            <Link to={'/'}>{<GoArrowLeft />} Go home page</Link>
            <div>
                {' '}
                <div>
                    {' '}
                    <img
                        src={
                            movieDetailsPage.poster_path
                                ? `https://image.tmdb.org/t/p/w500/${movieDetailsPage.backdrop_path}`
                                : defaultImg
                        }
                        width={250}
                        alt="poster"
                    />
                </div>
                <div>
                    {' '}
                    <h2>{movieDetailsPage.title}</h2>
                    <p>User Score: {Math.round((movieDetailsPage.vote_average * 100) / 10)}%</p>
                    <h3>Overview</h3>
                    <p>{movieDetailsPage.overview}</p>
                    <h3>Genres</h3>
                    {/* {genres.map(list => {
                        <li key={list.id}>yes</li>;
                    })} */}
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
