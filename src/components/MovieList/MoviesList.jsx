import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ onList }) {
    const location = useLocation();

    return (
        <li>
            <Link to={`/movie/${onList.id}`} state={location}>
                {onList.title}
            </Link>
        </li>
    );
}
