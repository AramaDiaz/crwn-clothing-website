import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    background-color: whitesmoke;
`;

export const CartItemsContainer = styled.div`
    height: 450px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export const EmptyMessageContainer = styled.span`
    font-size: 20px;
    font-weight: 900;
    margin: 50px auto;
    font-size: larger;
`;

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;