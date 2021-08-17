import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import { SignUpContainer, SignUpSubtitle, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <SignUpSubtitle>Sign up with your email and password</SignUpSubtitle>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName'
                        type='text'
                        label='Name'
                        value={displayName}                    
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='email'
                        type='email'
                        label='Email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        label='Password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                    
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp;