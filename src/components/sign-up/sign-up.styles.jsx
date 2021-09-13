import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    @media screen and (max-width: 800px) {
        margin: 0 auto;
        margin-bottom: 25px;
        width: fit-content;
    }
`;

export const SignUpTitle = styled.h2`
    margin: 10px 0;
    font-size: 40px;
    @media screen and (max-width: 800px) {
        font-size: 30px;
    }
`;

export const SignUpSubtitle = styled.span`
    font-size: 25px;
    @media screen and (max-width: 800px) {
        font-size: 20px;
    }
`;