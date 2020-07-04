import React, { useState, useEffect } from 'react';
import { getPopularSeries } from '../../services/client';

import { Section } from '../../styles/shared';
import { Item } from '../Media';

import MediaCarousel from '../Moviecarousel';

const PopularSeries: React.FC = () => {
  const [series, setSeries] = useState<Item[]>([]);

  useEffect(() => {
    //It get popularTv from Api endpoint(services/api.ts)
    async function loadPopularSeries() {
      const popularSeries = await getPopularSeries();
      setSeries(
        popularSeries.map((item: Item) => ({
          ...item,
          media_type: 'tv',
        })),
      );
    }
    loadPopularSeries();
  }, []);

  return (
    <>
      {series && (
        <Section>
          <h1>Lista de filmes sugeridos</h1>
          <MediaCarousel items={series} />
        </Section>
      )}
    </>
  );
};

export default PopularSeries;
