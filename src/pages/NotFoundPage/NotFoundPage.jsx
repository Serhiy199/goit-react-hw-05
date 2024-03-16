import { Link } from 'react-router-dom';
export default function NotFoundPage() {
    return (
        <div>
            <Link to={'/'}> Go home page</Link>
            <p>Sorry!!!! Page not found</p>
        </div>
    );
}
