import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #972D07;
  padding: 25px 50px;
  display: flex;
  flex-direction: column;

  box-shadow: 10px;

  img {
    width: 100px;
  }
`;

export const Header = styled.div``;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 40px 20px;
  flex: 1;
`;

export const Title = styled.h1`
  color: white;
  font-size: 4.5em;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const AllProfiles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 250px;
  width: 100%;
`;

export const CardProfile = styled.div`
  cursor: pointer;

  & + div {
    margin-left: 40px;
  }

  &:hover {
    > div {
      border-color: white;
    }

    p {
      color: white;
    }
  }
`;

export const CardAvatar = styled.div`
  height: 200px;
  width: 200px;
  border: 0.3em solid rgba(0, 0, 0, 0.4);

  img {
    height: 190px;
    width: 190px;
  }

  &:hover {
    border-color: black;
  }
`;

export const CardText = styled.p`
  margin-top: 20px;
  text-align: center;
  font-weight: 400;
  color: #ffb20f;
  font-size: 1.5em;
`;

export const Button = styled.button`
  margin-top: 80px;
  background-color: white;
  width: 330px;
  height: 60px;

  border: 1px solid #ffb20f;
  background-color: #972D07;
  color:#ffb20f;
  font-size: 1.5em;

  cursor: pointer;

  &:hover {
    color: white;
    border-color: white;
  }
`;

export const AddProfile = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 190px;
    width: 190px;
  }

  &:hover {
    border-color: white;
  }
`;


export const ProfileContainer = styled.div`
    width: 0 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 20px 40px 20px;
    margin-top: -100px;
    text-decoration:none;
    grid-gap: 32px;
    object-fit: cover;
    display:flex;

 
`;