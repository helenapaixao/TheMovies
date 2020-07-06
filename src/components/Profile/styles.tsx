import styled, { css } from "styled-components";

export const Container = styled.div`
    background: #28262e;
    border-radius: 10px;
    margin-left: 35px;
    header {
        background: #ffb84d;
        border-radius: 8px 8px 0px 0px;
        height: 192px;
        overflow: hidden;
        transition: 0.3s opacity;
        text-align: center;
    }

    section.body {
        padding: 30px;
        h2 {
            color: #3d3d4d;
            text-decoration: none;
        }
        p {
            color: #3d3d4d;
            margin-top: 16px;
            text-decoration: none;
        }
        svg {
            color: #ffb84d;
        }
    }
`;
