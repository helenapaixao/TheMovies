import React, { useState } from "react";

import { FiEdit3, FiTrash } from "react-icons/fi";

import { Container } from "./styles";

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
    available: boolean;
    backdrop_path: string;
    status: string;
    id: number;
}

interface IProps {
    movie: Item;
}

const Movie: React.FC<IProps> = ({ movie }: IProps) => {
    const [isAvailable, setIsAvailable] = useState(movie.available);

    async function toggleAvailable(): Promise<void> {
        setIsAvailable(!isAvailable);
    }

    return (
        <Container available={isAvailable}>
            <header>
                <img src={movie.backdrop_path} alt={movie.original_title} />
            </header>
            <section className="body">
                <h2>{movie.original_title}</h2>
                <p>Descrição</p>
            </section>
            <section className="footer">
                <div className="availability-container">
                    <p>{isAvailable ? "Assitido" : "Não assistido"}</p>

                    <label
                        htmlFor={`available-switch-${movie.id}`}
                        className="switch"
                    >
                        <input
                            id={`available-switch-${movie.id}`}
                            type="checkbox"
                            checked={isAvailable}
                            onChange={toggleAvailable}
                            data-testid={`change-status-movie-${movie.id}`}
                        />
                        <span className="slider" />
                    </label>
                </div>
            </section>
        </Container>
    );
};

export default Movie;
