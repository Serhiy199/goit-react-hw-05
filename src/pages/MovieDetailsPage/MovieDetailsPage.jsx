import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { CinemaId } from '../../cinema-api';
import { GoArrowLeft } from 'react-icons/go';
import {
    container,
    titleMovie,
    listGenres,
    titleGenres,
    movieOverview,
    userScore,
    link,
    backLink,
} from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
    const [movieData, setMovieData] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();

    const backLinkRef = useRef(location.state ?? '/');

    useEffect(() => {
        async function getCinema() {
            try {
                if (!movieId) return;
                setError(false);
                setLoading(true);
                const data = await CinemaId(movieId);

                setMovieData(data);
                setMovieGenres(data.genres);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCinema();
    }, [movieId]);

    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

    return (
        <>
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
            <Link className={backLink} to={backLinkRef.current}>
                {<GoArrowLeft />} Back to list movies
            </Link>
            <div className={container}>
                {' '}
                <div>
                    {' '}
                    <img
                        src={
                            movieData.poster_path
                                ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                                : defaultImg
                        }
                        width={300}
                        alt="poster"
                    />
                </div>
                <div>
                    {' '}
                    <h2 className={titleMovie}>{movieData.title}</h2>
                    <p>
                        <span className={userScore}>User Score:</span>{' '}
                        {Math.round((movieData.vote_average * 100) / 10)}%
                    </p>
                    <h3 className={titleGenres}>Overview</h3>
                    <p className={movieOverview}>{movieData.overview}</p>
                    <h3 className={titleGenres}>Genres</h3>
                    {movieGenres.map(list => {
                        return (
                            <span className={listGenres} key={list.id}>
                                {list.name}
                            </span>
                        );
                    })}
                </div>
            </div>

            <div>
                <h3>Additional information</h3>
                <Suspense fallback={''}>
                    <Link className={link} to={'cast'}>
                        Cast
                    </Link>
                    <Link className={link} to={'reviews'}>
                        Reviews
                    </Link>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
}
