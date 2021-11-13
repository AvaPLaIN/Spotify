//! IMPORTS
//     ? IMPORT REACT

//     ? IMPORT REDUX

//     ? IMPORT LIBRARIES
import axios from 'axios';

//     ? IMPORT API

//     ? IMPORT HOOKS

//     ? IMPORT PAGES

//     ? IMPORT COMPONENTS

//     ? IMPORT UTILS

export const authLoginWithSpotify = async (code) => {
  try {
    const data = await axios.post('http://localhost:8800/api/auth/login', {
      code,
    });
    return { data, isAuthError: false };
  } catch (error) {
    return { error, isAuthError: true };
  }
};

export const authRefreshToken = async (refreshToken) => {
  try {
    const data = await axios.post(
      'http://localhost:8800/api/auth/refreshJwtToken',
      {
        refreshToken,
      }
    );
    console.log('data refreshToken: ', data);
    return { data, isAuthError: false };
  } catch (error) {
    console.log('api_auth_authRefreshToken_Error: ', error);
    return { error, isAuthError: true };
  }
};
