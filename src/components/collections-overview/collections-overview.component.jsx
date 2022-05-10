import React from 'react';
import { connect, useSelector } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = () => {
  const collections = useSelector((state) => state.shop.collections);
  console.log(collections);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default connect(null)(CollectionsOverview);
