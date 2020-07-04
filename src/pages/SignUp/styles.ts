import styled from "styled-components";
import signBackgroundImg from "../../assets/home_cinema.svg";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: #972d07;
  a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, "#F4EDE8")};
      }
    }
`;

export const Image = styled.image`
  flex: 1;
  background: url(${signBackgroundImg}) no-repeat center;
  background-size: cover;
  size: 200px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, "#F4EDE8")};
      }
    }
  }

  h1 {
    margin-bottom: 24px;
    align-items: center;
    margin-left: 20px;
  }
`;
