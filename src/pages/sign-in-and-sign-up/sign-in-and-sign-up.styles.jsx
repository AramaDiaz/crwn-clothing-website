import styled from 'styled-components';

export const SignInSignUpContainer = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 800px) {
        width: unset;
        flex-direction: column;
        align-items: center;

        > *:first-child {
            margin-bottom: 50px;
            margin: 0 auto;
        }
    }
`;
