import styled from 'styled-components';
import { shade } from "polished";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Box = styled.div`
  @media (max-width: 576px) {
    padding: 2rem;
    align-self: center;
  }
`;

export const ContentAll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10rem;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    text-align: center;
    padding: 5rem;
  }
`;

export const ContentCol = styled.div`
  width: 60rem;
  height: auto;

  @media (max-width: 576px) {
    padding: 0;
    align-self: center;
    width: 40rem;
  }
`;

export const ContentText = styled.div`
  padding-right: 5rem;
  & h3 {
    font-size: 2rem;
    color: #ffb20f;
    padding: 1rem 0;
  }

  @media (max-width: 576px) {
    padding: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;

  h1 {
    font-size: 4rem;

    & span {
      font-size: 2rem;
      color: #a09999;
      align-self: flex-end;
      margin-left: 1rem;
    }
  }

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const About = styled.p`
  font-size: 2rem;
  padding: 4rem 0;
`;

export const MoreInfo = styled.div`
  font-size: 1.5rem;
  li {
    list-style: none;
    color: #e9e9e9;

    & strong {
      margin-right: 0.5rem;
    }

    + li {
      margin-top: 0.2rem;
    }
  }
`;

export const ContentButton = styled.div`
  padding: 3rem 0;

  button {
      margin-top:20px;
    width: 223px;
    height: 40px;
  background-color:#FFB20F; 
    color: #28262e;
  }

  a {
      margin-left:20px;
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, "#FFB20F")};
      }
    }

    svg {
        margin-right:20px;
    }
`;

export const ContentImg = styled.div`
  img {
    width: auto;
    height: 70rem;
  }

  @media (max-width: 576px) {
    img {
      height: 50rem;
      margin-bottom: 2rem;
    }
  }
`;

