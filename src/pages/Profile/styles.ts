import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const ProfilesContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin-bottom: 100px;
    margin: 0 auto;
    padding: 40px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    div {
        margin: 40px;
        margin-top: 50%;
    }

    h1 {
        margin-left: -18px;
        margin-top: 20px;
    }
`;
