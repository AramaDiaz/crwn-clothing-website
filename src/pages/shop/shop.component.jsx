import React from 'react';
import CollectionsOverview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';

const ShopPage = () => (
    <div className='shop-page'>
        <span className='title'>Collections</span>
        <CollectionsOverview />
    </div>
)

export default ShopPage;