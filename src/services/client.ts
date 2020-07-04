import axios from 'axios';

const API_TOKEN = process.env.REACT_APP_API_TOKEN || 'api-token';
axios.defaults.headers.common = { Authorization: `Bearer ${API_TOKEN}` };

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});


export const API_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

export async function getPopularMovies() {
    const response = await client.get(`movies/popular`);
    return response.data.results;
}

export async function getPopular(type: string) {
    const response = await client.get(`${type}/popular`);
    return response.data.results;
}

export async function getByGenre(type: string, genre: any[]) {
    const response = await client.get(
        `/discover/${type}?with_genres=${genre.join(",")}`
    );

    const results = response.data.results.map((item: any) => ({
        ...item,
        media_type: type,
    }));
    return results;
}

export async function getAllByGenre(genre: any[]) {
    let movies = await getByGenre("movie", genre);

    return [...movies];
}

export async function getResults(query: string) {
    const response = await client.get(`search/multi?query=${query}`);
    return response.data.results;
}

export async function getDetail(type: string, id: string) {
    const response = await client.get(`${type}/${id}`);
    return response.data;
}




export default client;