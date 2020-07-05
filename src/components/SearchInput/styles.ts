 
import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #212329;
  padding: 16px;
  width: 200%;
  align-items: center;
  display: flex;
  color: #666360;
  margin-bottom: 30px;
  & + div {
    margin-top: 8px;
  }
  input {
    flex: 1;
    height: 5rem;
    width: 60rem;
    padding: 0 2rem;
    border: 0;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    border-right: 0;
    color: #524b4b;
    font-size: 2rem;

    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
    color:#FFF;
   
  }
`;


export const Icon = styled.svg`
  margin-right: 1px;
`;