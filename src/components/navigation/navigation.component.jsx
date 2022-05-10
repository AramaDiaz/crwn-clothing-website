import React from 'react';
import { auth } from '../../utils/firebase/firebase.utils';
import { connect, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Outlet } from 'react-router';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './navigation.styles';
// import { CartDropdownContainer } from '../cart-dropdown/cart-dropdown.container';
import CartIconContainer from '../cart-icon/cart-icon.container';

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);
  return (
    <>
      <HeaderContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to='/shop'>SHOP</OptionLink>
          <OptionLink to='/contact'>CONTACT</OptionLink>
          <OptionLink to='/sign-in'>SIGN IN</OptionLink>
          {/* {currentUser ? (
          <OptionLink
            as='div'
            // onClick={() => auth.signOut()}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signIn'>SIGN IN</OptionLink>
        )} */}
          <CartIconContainer />
        </OptionsContainer>
        {
          hidden ? null : <p>loc pt cart dropdown container</p>
          //  <CartDropdownContainer />
        }
      </HeaderContainer>
      <Outlet />
    </>
  );
};

// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser,
//     hidden: selectCartHidden
// });

export default connect(null)(Navigation);
