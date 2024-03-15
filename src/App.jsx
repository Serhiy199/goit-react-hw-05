import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import cinemaApi from './cinema-api';
import HomePage from './pages/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';

function App() {
    const [favoritCinema, setFavoritCinema] = useState([]);

    useEffect(() => {
        async function getCinema() {
            try {
                const data = await cinemaApi();
                // console.log(data);
                setFavoritCinema(data);
                // setTotalPages(data.total_pages);
            } catch (error) {
                console.log(error);
                // setError(true);
            } finally {
                // setLoading(false);
            }
        }
        getCinema();
    }, []);
    console.log(favoritCinema);
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage onFavorCinema={favoritCinema} />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </>
    );
}

export default App;
