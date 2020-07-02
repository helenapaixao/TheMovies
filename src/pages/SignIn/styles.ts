import styled from "styled-components";
import signBackgroundImg from "../../assets/home_cinema.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: #972d07;
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

  h1 {
    margin-bottom: 20px;
    align-items: center;
    margin-left: 50px;
  }

`;

export const Link = styled.div`


` ;
