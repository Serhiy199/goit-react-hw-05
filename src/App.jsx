import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

function App() {
    // console.log(favoritCinema);
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </>
    );
}

export default App;
