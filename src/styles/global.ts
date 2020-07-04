import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}


html {
    font-size: 62,5%;
  }

img {
     height: 60px;
 }

 #root {
    margin: 0 auto;
    padding-bottom:8rem;

  }

body {
    background: #972D07;
    -webkit-font-smoothing: antiased;

}


body, input, button {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    font-weight: normal;
    color: #ffffff;

}
@media (max-width:1200px) {
    html{
      font-size: 70%;
    }
  }

  @media (max-width:768px) {
    html{
      font-size: 50%;
    }
  }

  @media (max-width:576px) {
    html{
      font-size: 54%;
    }
  }

  @media (min-width:768px) {
    html{
      font-size: 60%;
    }
  }


h1,h2,h3,h4,h5,h6, strong {
    font-weight: 500;
}

button {
    cursor: pointer;
    border: 0;
    font-weight: bold;
    border-radius: 50px;
}



`;
