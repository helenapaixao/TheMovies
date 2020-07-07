
import React from 'react';

import Header from '../../components/Header';

import { useFavorites } from '../../hooks/favourites';

import MediaCarousel from '../../components/Moviecarousel';

const MyList: React.FC = () => {
	const { favorites } = useFavorites();
	return (
		<>
			<Header />
			<main>
				<MediaCarousel items={favorites} />
			</main>
		</>
	);
};

export default MyList;