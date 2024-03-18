import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const authorizationApiKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWYyODFhYWY2N2IzNGRiODgyN2FmNGVkZDU0MDUyYiIsInN1YiI6IjY1ZjA2YTIzNDU1N2EwMDE4NTI5YzU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d1ec98Z4QeM8yD9E6xxQKd4oRvWBc8Za69OuS1wEe1M';
axios.defaults.headers.common['Authorization'] = authorizationApiKey;
// const apiKey = 'c1f281aaf67b34db8827af4edd54052b';
// axios.defaults.params.common['api_key'] = apiKey;

export default async function favoriteCinemaDay() {
    const response = await axios.get('/3/trending/movie/day', {
        params: {
            api_key: 'c1f281aaf67b34db8827af4edd54052b',
        },
    });
    return response.data.results;
}

export async function CinemaId(id) {
    const response = await axios.get(`/3/movie/${id}`, {
        params: {
            api_key: 'c1f281aaf67b34db8827af4edd54052b',
        },
    });
    return response.data;
}

export async function MoviesCats(id) {
    const response = await axios.get(`/3/movie/${id}/credits`, {
        params: {
            api_key: 'c1f281aaf67b34db8827af4edd54052b',
        },
    });
    return response.data;
}

export async function MoviesReviews(id) {
    const response = await axios.get(`/3/movie/${id}/reviews`, {
        params: {
            api_key: 'c1f281aaf67b34db8827af4edd54052b',
        },
    });
    return response.data;
}

export async function MovieSearch(movie) {
    const response = await axios.get('/3/search/movie', {
        params: {
            query: movie,
            api_key: 'c1f281aaf67b34db8827af4edd54052b',
        },
    });
    return response.data.results;
}
