


import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

const SIGN_IN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      email
      token
    }
  }
`;

const SignIn = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [signIn] = useMutation(SIGN_IN_MUTATION, {
    onCompleted: (data) => {
      const { token } = data.loginUser;
      onLoginSuccess(token);
      navigate('/dashboard'); // Redirect user to the dashboard page
    },
    onError: (error) => {
      console.error('Sign in error', error);
    },
  });

  const handleSubmit = (formData) => {
    const { email, password } = formData;
    signIn({ variables: { email, password } });
  };

  return <AuthForm isSignUp={false} handleSubmit={handleSubmit} />;
};

export default SignIn;
