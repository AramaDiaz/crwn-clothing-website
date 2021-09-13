import React from 'react';
import { CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

export const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartContainer onClick={ toggleCartHidden }>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

export default CartIcon;