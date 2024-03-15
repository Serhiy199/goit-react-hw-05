import { Link } from 'react-router-dom';
export default function HomePage({ onFavorCinema }) {
    // console.log(onFavorCinema);
    return (
        <ul>
            {onFavorCinema.map(list => {
                return (
                    <Link to="/movies/:movieId" key={list.id}>
                        {list.title}
                    </Link>
                );
            })}
        </ul>
    );
}
