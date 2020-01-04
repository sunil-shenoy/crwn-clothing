import React, { Component } from 'react';
import SHOP_DATA from './shot.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import './shop.styles.scss';

class ShopData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>)
    }
}

export default ShopData;