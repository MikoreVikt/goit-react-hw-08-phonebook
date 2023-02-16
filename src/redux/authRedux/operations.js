import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessage } from 'services/notifications';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

// Utility to remove JWT
const clearToken = () => (axios.defaults.headers.common.Authorization = '');

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/signup`, credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      errorMessage(' Something wrong! Try again. ');
      return rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/login`, credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      errorMessage(' Something wrong! Try again. ');
      return rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearToken();
    } catch (error) {
      errorMessage(' Something wrong! Try again. ');
      return rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      errorMessage(' Something wrong! Try again. ');
      return rejectWithValue(error.message);
    }
  }
);
