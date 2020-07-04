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

// This function gets all genre and set it in an array.This will use in component/Family
export async function getAllByGenre(genre: any[]) {
    let tv = await getByGenre("tv", genre);
    let movies = await getByGenre("movie", genre);

    // more about concat array https://gist.github.com/yesvods/51af798dd1e7058625f4
    return [...tv, ...movies];
}

// It calls the endpoint to documentary genre
export async function getDocumentaries() {
    return getByGenre("movie", [99]);
}

// It gets the search by query
export async function getResults(query: string) {
    const response = await api.get(`search/multi?query=${query}`);
    return response.data.results;
}

// It gets the detail by type(tv/movie) and id
export async function getDetail(type: string, id: string) {
    const response = await api.get(`${type}/${id}`);
    return response.data;
}
