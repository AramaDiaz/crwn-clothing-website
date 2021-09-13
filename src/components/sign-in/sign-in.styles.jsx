import styled from "styled-components";

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 800px) {
        margin: 0 auto;
        margin-bottom: 25px;
        width: fit-content;
    }
`;

export const SignInTitle = styled.h2`
    margin: 10px 0;
    font-size: 40px;
    @media screen and (max-width: 800px) {
        font-size: 30px;
    }
`;

export const SignInSubtitle = styled.span`
    font-size: 25px;
    @media screen and (max-width: 800px) {
        font-size: 20px;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 800px) {

    }
`;