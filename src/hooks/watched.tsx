import React, { createContext, useContext, useCallback, useState } from 'react';

interface Genre {
	id: number;
	name: string;
}

export interface MediaData {
	id: number;
	unique_id: string;
	type: 'movie' | 'tv';
	title: string;
	year: number;
	poster_path: string;
	genres: Genre[];
}

interface WatchedContextData {
	toggleFavorite(media: MediaData): void;
	isFavorite(media: MediaData): boolean;
	favorites: MediaData[];
}

const WatchedContext = createContext<WatchedContextData>({} as WatchedContextData);

const WatchedProvider: React.FC = ({ children }) => {
    
	const [favorites, setFavorites] = useState<MediaData[]>(() => {
		const favs = localStorage.getItem('@TheMovies:watched');
		return favs ? JSON.parse(favs) : [];
	});

	const isFavorite = useCallback(
		(media: MediaData) => {
			return favorites.some(fav => fav.unique_id === media.unique_id);
		},
		[favorites],
	);

	const toggleFavorite = useCallback(
		(media: MediaData) => {
			let updatedFavorites: MediaData[] = [...favorites];

			if (isFavorite(media)) {
				updatedFavorites = favorites.filter(fav => fav.unique_id !== media.unique_id);
			} else {
				updatedFavorites.push(media);
			}

			setFavorites(updatedFavorites);
			localStorage.setItem('@TheMovies:watched', JSON.stringify(updatedFavorites));
		},
		[favorites, isFavorite],
	);

	return (
		<WatchedProvider.Provider value={{ toggleFavorite, isFavorite, favorites }}>
			{children}
		</WatchedProvider.Provider>
	);
};

function useFavorites(): FavoritesContextData {
	const context = useContext(FavoritesContext);
	if (!context) {
		throw new Error('useFavorites must be used within a FavoritesProvider');
	}
	return context;
}

export { FavoritesProvider, useFavorites };