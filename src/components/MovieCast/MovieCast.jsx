import Loader from '../../components/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesCats } from '../../cinema-api';

export default function MovieCast() {
    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

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
                    return (
                        <li key={cast.id}>
                            <img
                                src={
                                    cast.profile_path
                                        ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
                                        : defaultImg
                                }
                                width={250}
                                alt={`${cast.name}`}
                            />
                            <h4>{cast.name}</h4>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
