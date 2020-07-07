import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 0px;
  background: #28262e;
  width: 100%;
  header {
    max-width: 1120px;
    padding: 0 2rem;
    margin: 30px auto;
    display: flex;
    align-items: center;

  }

  nav {
    div {
        display: flex;
        
    }
    > img {
      height: 40px;
      margin-left: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 30px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }
  span {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #f4ede8;
  }
  button {
    color: #999591;
    margin-left: 300px;
    background: transparent;
    border: 0;
    height: 20px;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: #ffb20f;
    &::hover {
      opacity: 0.8;
    }
  }
  svg {
    margin-left: 300px;
    display: flex;
  }
`;


export const Divider = styled.div`
 display: flex;

    margin-left: 20px;
   

` ;
