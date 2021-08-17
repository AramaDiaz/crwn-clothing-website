import React from 'react';
import { withRouter } from 'react-router';
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from './menu-item.styles';

const MenuItem = ({title, imageUrl, history, linkUrl, match}) => (
    <MenuItemContainer 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
         <BackgroundImageContainer className='background-image' imageUrl={imageUrl}/>
         <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
         </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);