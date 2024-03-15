import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const myApiKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWYyODFhYWY2N2IzNGRiODgyN2FmNGVkZDU0MDUyYiIsInN1YiI6IjY1ZjA2YTIzNDU1N2EwMDE4NTI5YzU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d1ec98Z4QeM8yD9E6xxQKd4oRvWBc8Za69OuS1wEe1M';
axios.defaults.headers.common['Authorization'] = myApiKey;

export default async function cinemaApi() {
    const response = await axios.get('/3/trending/movie/day', {
        // headers: {
        //     Authorization:
        //         'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWYyODFhYWY2N2IzNGRiODgyN2FmNGVkZDU0MDUyYiIsInN1YiI6IjY1ZjA2YTIzNDU1N2EwMDE4NTI5YzU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d1ec98Z4QeM8yD9E6xxQKd4oRvWBc8Za69OuS1wEe1M',
        // },
        params: {
            api_key: 'c1f281aaf67b34db8827af4edd54052b',
            // language: 'en-US',
            // query,
            // page,
            // per_page: 12,
        },
    });
    return response.data.results;
}
