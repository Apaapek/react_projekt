import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authActions';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (formData.username && formData.password) {
      try {
        const response = await dispatch(login(formData));
        if (response && response.payload.id) {
          navigate('/home');
        } else {
          alert('Wrong username or password');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    } else {
      console.log('Form is invalid');
    }
  };

  const register = () => {
    navigate('/register');
  };

  return (
    <div className="form">
      <h1>Zaloguj się</h1>
      <form onSubmit={onSubmit}>
        <label for="username" className='hiddenLabel'>username</label>
        <input
          type="text"
          id="username"
          placeholder="Nazwa użytkownika"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <br />
        <label for="password" className='hiddenLabel'>username</label>
        <input
          type="password"
          id="password"
          placeholder="Hasło"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <br />
        <input type="submit" value="Zaloguj" id="btn" />
      </form>
      <a onClick={register}>Rejestracja</a>
    </div>
  );
};

export default LoginComponent;
