
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection
import './AuthForm.css';

const AuthForm = ({ isSignUp, handleSubmit, toggleForm }) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    name: '',
  });

  const navigate = useNavigate(); // Hook for navigating between routes

  const localHandleSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formState);
  };

  return (
    <div className="auth-form-container">
      <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
      <form onSubmit={localHandleSubmit}>
        {isSignUp && (
          <input
            type="text"
            placeholder="Name"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
      </form>
      {isSignUp ? (
        <p>
          Already have an account?{' '}
          <button onClick={() => navigate('/signin')}>Log In</button>
        </p>
      ) : (
        <p>
          Don't have an account?{' '}
          <button onClick={() => navigate('/signup')}>Sign Up</button>
        </p>
      )}
    </div>
  );
};

export default AuthForm;


