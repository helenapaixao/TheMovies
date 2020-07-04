import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

interface MovieData {
    id: string;
    original_title:string;
    backdrop_path:string;
    available: boolean;

}

interface MovieProps {
  movie: MovieData;

}

const Movie: React.FC<MovieProps> = ({
  movie,
}: MovieProps) => {
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
          <p>{isAvailable ? 'Assitido' : 'Não assistido'}</p>

          <label htmlFor={`available-switch-${movie.id}`} className="switch">
            <input
              id={`available-switch-${movie.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
              data-testid={`change-status-food-${movie.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};

export default Movie;