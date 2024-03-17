import { Link } from 'react-router-dom';

export default function MoviesList({ onList }) {
    return (
        <li>
            <Link to={`/movie/${onList.id}`}>{onList.title}</Link>
        </li>
    );
}
