import styled from "styled-components";

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 320px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
      cursor: pointer;

      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      & .content {
        opacity: 0.9;
      }
    }
    
    &:first-child {
      margin-right: 7.5px;
    }

    &:nth-last-child(2) {
      height: 360px;
    }
  
    &:last-child {
      margin-left: 7.5px;
      height: 360px;
    }

    @media screen and (max-width: 800px) {
      height: 250px;
      &:nth-last-child(2) {
        height: 250px;
      }
      &:last-child {
        height: 250px;
      }
    }
`;

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: ${({ imageUrl}) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
    height: 100px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    @media screen and (max-width: 800px) {
      padding: 0 10px;
      height: 80px;
    }
`;

export const ContentTitle = styled.h1`
    font-weight: bolder;
    margin-top: 0;
    margin-bottom: 6px;
    font-size: 25px;
    color: #4a4a4a;
    @media screen and (max-width: 800px) {
      font-size: 20px;
    }
`;

export const ContentSubtitle = styled.span`
    font-weight: lighter;
    font-size: 18px;
    @media screen and (max-width: 800px) {
      font-size: 15px;
    }
`;