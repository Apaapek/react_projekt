import { loginSuccess, logout } from './authSlice';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/auth';

export const login = (params) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, params);
    dispatch(loginSuccess(response.data));
    return { payload: response.data };
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const register = (params) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, params);
    return { payload: response.data };
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

export const update = (params) => async (dispatch) => {
  try {
    const response = await axios.patch(`${apiUrl}/user`, params);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    console.error('Update failed:', error);
  }
};
