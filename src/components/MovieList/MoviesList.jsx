import { Link, useLocation } from 'react-router-dom';
import { list, img, listMovie, title } from './MoviesList.module.css';

export default function MoviesList({ onList }) {
    const location = useLocation();
    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

    return (
        <>
            {/* <li className={list}>
                <img
                    className={img}
                    src={
                        onList.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${onList.poster_path}`
                            : defaultImg
                    }
                    width={250}
                    alt="poster"
                />
                <Link className={listMovie} to={`/movies/${onList.id}`} state={location}>
                    {onList.title}
                </Link>
            </li> */}
            <li className={list}>
                <Link className={listMovie} to={`/movies/${onList.id}`} state={location}>
                    <img
                        className={img}
                        src={
                            onList.poster_path
                                ? `https://image.tmdb.org/t/p/w500/${onList.poster_path}`
                                : defaultImg
                        }
                        width={250}
                        alt="poster"
                    />
                    <p className={title}>{onList.title}</p>
                </Link>
            </li>
        </>
    );
}
