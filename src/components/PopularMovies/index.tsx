import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/client";

import { Section } from "../../styles/shared";
import { Item } from "../Media";

import MovieCarousel from "../Moviecarousel";

const PopularMovies: React.FC = () => {
    const [movies, setMovies] = useState<Item[]>([]);

    useEffect(() => {
        async function loadPopularMovies() {
            const popularMovies = await getPopularMovies();
            setMovies(
                popularMovies.map((item: Item) => ({
                    ...item,
                    media_type: "movie",
                }))
            );
        }
        loadPopularMovies();
    }, []);

    return (
        <>
            {movies && (
                <Section>
                    <h1>Popular Movies</h1>
                    <MovieCarousel items={movies} />
                </Section>
            )}
        </>
    );
};

export default PopularMovies;
