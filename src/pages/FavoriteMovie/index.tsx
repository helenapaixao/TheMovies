import React, { useState, useEffect } from "react";

import { API_BASE_IMAGE_URL, getDetail } from "../../services/client";
import { useRouteMatch } from "react-router-dom";

import Header from "../../components/Header";

import notfound from "../../assets/notfound.svg";

import api from "../../services/api";
import {  Section} from '../../styles/shared';


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

    return (
        <>
            <Header/>
            <Container>
            <h1>FavoriteMovie</h1>
   
        <Section>

        </Section>
  
            </Container>
        </>
    );
};

export default FavoriteMovie;
