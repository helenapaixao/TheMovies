import React from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_IMAGE_URL } from '../../services/client';

import notfound from '../../assets/notfound.svg';

export interface Item {
  poster_path: string | null;
  title: string;
  id: number;
}

interface IMedia {
  type: string;
  item: Item;
}

const Media: React.FC<IMedia> = ({ type, item }) => {
  return (
    <Link to={`/detail/${type}/${item.id}`}>
      {item.poster_path !== null ? (
        <img
          src={`${API_BASE_IMAGE_URL}w342${item.poster_path}`}
          alt={item.title}
        />
      ) : (
        <img src={notfound} alt="notfound" />
      )}
    </Link>
  );
};

export default Media;