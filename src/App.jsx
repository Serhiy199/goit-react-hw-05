import { useState, useEffect } from 'react';
import './App.css';
import cinemaApi from './cinema-api';

function App() {
    // const [count, setCount] = useState();

    useEffect(() => {
        async function getCinema() {
            try {
                const data = await cinemaApi();
                console.log(data);
                // setArrPhoto(oldPhoto => [...oldPhoto, ...data.results]);
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

    return <></>;
}

export default App;
