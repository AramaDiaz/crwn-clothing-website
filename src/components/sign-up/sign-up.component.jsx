import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignUpContainer, SignUpSubtitle, SignUpTitle } from './sign-up.styles';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = form;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { name });
    //   setForm({ name: '', email: '', password: '', confirmPassword: '' });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <SignUpSubtitle>Sign up with your email and password</SignUpSubtitle>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          name='displayName'
          type='text'
          label='Name'
          value={name}
          onChange={handleChange}
          required
        />
        <FormInput
          name='email'
          type='email'
          label='Email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          label='Password'
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          name='confirmPassword'
          type='password'
          label='Confirm Password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
