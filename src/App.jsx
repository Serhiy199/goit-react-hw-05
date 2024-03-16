import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
    // console.log(favoritCinema);
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
                    <Route path="cast" element={<MovieCast />} />
                    <Route path="reviews" element={<MovieReviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
