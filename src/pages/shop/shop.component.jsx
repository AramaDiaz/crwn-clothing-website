import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import './shop.styles.scss';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <span className='title'>Collections</span>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)

export default ShopPage;