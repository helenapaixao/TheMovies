import React, { useEffect, useState } from 'react';
import { getAllByGenre } from '../../services/client';

import { Section } from '../../styles/shared';
import { Item } from '../Media';

import MediaCarousel from '../Moviecarousel';

const Family: React.FC = () => {
  const [family, setFamily] = useState<Item[]>([]);

  useEffect(() => {
    async function loadFamily() {
      const allFamily = await getAllByGenre([10751]);
      setFamily(allFamily.sort(() => 0.5 - Math.random()).slice(0, 20));
    }
    loadFamily();
  }, []);

  return (
    <>
      {family && (
        <Section>
          <h1>Family</h1>
          <MediaCarousel items={family} />
        </Section>
      )}
    </>
  );
};

export default Family;
