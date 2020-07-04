import React, { useEffect, useState } from 'react';

import { Section } from '../../styles/shared';

import { getDocumentaries } from '../../services/client';

import MediaCarousel from '../Moviecarousel';

import { Item } from '../Media';

const Documentary: React.FC = () => {
  const [documentaries, setDocumentaries] = useState<Item[]>([]);

  useEffect(() => {
    async function loadDocumentaries() {
      const documentaries = await getDocumentaries();
      setDocumentaries(documentaries);
    }
    loadDocumentaries();
  }, []);

  return (
    <>
      {documentaries && (
        <Section>
          <h1>Documentary</h1>
          <MediaCarousel items={documentaries} />
        </Section>
      )}
    </>
  );
};

export default Documentary;
