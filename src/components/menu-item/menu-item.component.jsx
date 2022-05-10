import React from 'react';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';
import { useNavigate } from 'react-router';

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <MenuItemContainer onClick={navigate(`/${linkUrl}`)}>
      <>
        <BackgroundImageContainer
          className='background-image'
          imageUrl={imageUrl}
        />
        <ContentContainer>
          <ContentTitle>{title.toUpperCase()}</ContentTitle>
          <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
      </>
    </MenuItemContainer>
  );
};

export default MenuItem;
