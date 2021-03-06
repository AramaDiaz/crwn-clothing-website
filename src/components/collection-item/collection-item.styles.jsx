import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 500px;
    align-items: center;
    position: relative;

    &:hover {
      .image {
        opacity: 0.8;
      }
      button {
        opacity: 0.85;
        display: flex;
      }
    }

    @media screen and (max-width: 800px) {
      width: 40vw;
      height: 350px;
      &:hover {
        .image {
          opacity: unset;
        }
        button {
          opacity: unset;
        }
      }
    }
`;

export const AddButton = styled(CustomButton)`
    width: 70%;
    opacity: 0.7;
    position: absolute;
    top: 380px;
    display: none;
    font-size: large;

    @media screen and (max-width: 800px) {
      /* height: auto; */
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 5px;
      top: 250px;
      font-size: 15px;
      width: 80%;
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    @media screen and (max-width: 800px) {
      font-size: 15px;
      width: 95%;
    }
`;

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 10%;
    text-align: right;
`;