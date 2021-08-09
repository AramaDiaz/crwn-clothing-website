import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';
import './shop.styles.scss';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                <span className='title'>Collections</span>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={ id } { ...otherCollectionProps } />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;