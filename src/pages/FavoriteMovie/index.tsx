import React, { useState, useEffect } from "react";

import { API_BASE_IMAGE_URL, getDetail } from "../../services/client";
import { useRouteMatch } from "react-router-dom";

import Header from "../../components/Header";

import notfound from "../../assets/notfound.svg";

import api from "../../services/api2";
import Movie from "../../components/Movie";
import { Section } from "../../styles/shared";
import MediaCarousel from '../../components/Moviecarousel'

import {
    Container,
    Box,
    ContentAll,
    ContentCol,
    ContentText,
    About,
    ContentButton,
    ContentImg,
    MoreInfo,
    Title,
} from "./styles";

interface ItemParams {
    type: string;
    id: string;
}

interface Item {
    poster_path: string | null;
    overview: string;
    original_title: string;
    original_language: string;
    original_name: string;
    origin_country: string;
    title: string;
    popularity: number;
    vote_count: number;
    vote_avanger: number;
    first_air_date: string;
    last_episode_to_air: string;
    next_episode_to_air: string;
    release_date: string;
    name: string;
    status: string;
    id: number;
}

const FavoriteMovie: React.FC = () => {
    const [favorites, setFavorites] = useState<Item[]>([]);
    const [movies, setMovies] = useState<Item[]>([]);

    useEffect(() => {
        async function loadFavorites(): Promise<void> {
            const response = await api.get("/favorites");

            const listFavorites = response.data.map((favorite: Item) => {
                return {
                    ...favorite,
                };
            });
            setFavorites(listFavorites);
        }

        loadFavorites();
    }, []);

    useEffect(() => {
        async function loadMovies(): Promise<void> {
            const response = await api.get("/movies");

            setMovies(response.data);
        }

        loadMovies();
    }, []);

    async function handleAddMovie(
        movie: Omit<Item, "id" | "available">
    ): Promise<void> {
        try {
            const response = await api.post(`/movies`, {
                ...movie,
                available: true,
            });

            setMovies([...movies, response.data]);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Header />
            <Container>
                <h1>FavoriteMovie</h1>

                {movies &&
                    movies.map((movie) => (
                        <MediaCarousel items={movies} />
                    ))}
            </Container>
        </>
    );
};

export default FavoriteMovie;
