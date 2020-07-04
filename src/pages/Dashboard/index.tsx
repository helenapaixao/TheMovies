import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import MoviePopular from '../../components/PopularMovies'

import { MoviesContainer } from "./styles";


interface Movies {
    id: string;
    original_title: string;
    overview: string;
    backdrop_path: string;
    available: boolean;
}

const Dashboard: React.FC = () => {
    const [movie, setMovies] = useState<Movies | null>(null);
    const [editingMovie, setEditingMovie] = useState<Movies>({} as Movies);

 
    return (
        <>
            <Header />
            <MoviePopular/>

            <MoviesContainer data-testid="movies-list">
                {movie && (
                    <>
                        <h1>{movie.original_title}</h1>
                        <img
                            src={movie.backdrop_path}
                            alt={movie.backdrop_path}
                        />
                        <h1>{movie.overview}</h1>
                    </>
                )}
            </MoviesContainer>
        </>
    );
};

export default Dashboard;
