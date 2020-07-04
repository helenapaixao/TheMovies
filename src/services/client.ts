import api from "./api";

export const API_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

export const VIDEO_LIST_URI =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export async function getPopularMovies() {
    const response = await api.get(`movie/popular`);
    return response.data.results;
}

export async function getPopularSeries() {
    const response = await api.get(`tv/popular`);
    return response.data.results;
}

export async function getPopular(type: string) {
    const response = await api.get(`${type}/popular`);
    return response.data.results;
}

export async function getByGenre(type: string, genre: any[]) {
    const response = await api.get(
        `/discover/${type}?with_genres=${genre.join(",")}`
    );
    const results = response.data.results.map((item: any) => ({
        ...item,
        media_type: type,
    }));
    return results;
}

export async function getAllByGenre(genre: any[]) {
    let tv = await getByGenre("tv", genre);
    let movies = await getByGenre("movie", genre);

    return [...tv, ...movies];
}

export async function getDocumentaries() {
    return getByGenre("movie", [99]);
}

export async function getResults(query: string) {
    const response = await api.get(`search/multi?query=${query}`);
    return response.data.results;
}

export async function getDetail(type: string, id: string) {
    const response = await api.get(`${type}/${id}`);
    return response.data;
}
