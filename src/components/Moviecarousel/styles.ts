import styled from 'styled-components';

export const Container = styled.div`
  ul {
    margin-top: 2rem;

    li {
      width: auto !important;
      height: 40rem !important;
      margin: 0 5px;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-1rem);
      }
    }

    img {
      height: 40rem;
      width: auto;
    }
  }
`;
