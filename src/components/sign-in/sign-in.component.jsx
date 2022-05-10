import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import {
  SignInContainer,
  SignInTitle,
  ButtonsContainer,
  SignInSubtitle,
} from './sign-in.styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await auth.signInWithEmailAndPassword(email, password);
      // this.setState({ email: '', password: '' })
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <SignInSubtitle>Sign in with your email and password</SignInSubtitle>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={(e) => setEmail({ [e.target.name]: e.target.value })}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={(e) => setPassword({ [e.target.name]: e.target.value })}
          label='Password'
          required
        />
        <ButtonsContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={logGoogleUser} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
