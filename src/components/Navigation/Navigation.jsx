import { NavLink } from 'react-router-dom';
import { headerStyle, active, link } from './Navigation.module.css';
import clsx from 'clsx';
export default function Navigation() {
    const buildLinkClass = ({ isActive }) => {
        return clsx(link, isActive && active);
    };
    return (
        <header className={headerStyle}>
            <nav>
                <NavLink className={buildLinkClass} to="/">
                    Home
                </NavLink>
                <NavLink className={buildLinkClass} to="/movies">
                    Movies
                </NavLink>
            </nav>
        </header>
    );
}
