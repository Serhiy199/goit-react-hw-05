import { Link, useLocation } from 'react-router-dom';
import { list } from './MoviesList.module.css';

export default function MoviesList({ onList }) {
    const location = useLocation();

    return (
        <li>
            <Link className={list} to={`/movies/${onList.id}`} state={location}>
                {onList.title}
            </Link>
        </li>
    );
}
