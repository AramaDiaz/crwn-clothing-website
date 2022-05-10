import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments
} from './utils/firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
// import { createStructuredSelector } from 'reselect';
// import { selectCurrentUser } from './redux/user/user.selectors';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { GlobalStyle } from './global.styles';
import SignIn from './components/sign-in/sign-in.component';
import Navigation from './components/navigation/navigation.component';

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route
          path='/signin'
          render={() =>
            this.props.currentUser ? <Navigate to='/' /> : <SignInAndSignUp />
          }
        />
      </Routes>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   // collectionsArray: selectCollectionsForPreview
// });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
