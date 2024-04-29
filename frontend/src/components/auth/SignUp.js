


import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

const SIGN_UP_MUTATION = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      email
      token
    }
  }
`;

const SignUp = ({ onLogin }) => {
  const navigate = useNavigate();
  const [signUp] = useMutation(SIGN_UP_MUTATION, {
    onCompleted: (data) => {
      const { token } = data.createUser;
      onLogin(token);
      navigate('/dashboard'); // Redirect user to the dashboard page
    },
    onError: (error) => {
      console.error('Sign up error', error);
    },
  });

  const handleSubmit = (formData) => {
    const { name, email, password } = formData;
    signUp({ variables: { name, email, password } });
  };

  return <AuthForm isSignUp={true} handleSubmit={handleSubmit} />;
};

export default SignUp;
