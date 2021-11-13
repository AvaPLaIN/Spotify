//! IMPORTS
//     ? IMPORT REACT

//     ? IMPORT REDUX
import { useDispatch, useSelecotor } from 'react-redux';

//     ? IMPORT API

//     ? IMPORT HOOKS

//     ? IMPORT PAGES

//     ? IMPORT COMPONENTS

//     ? IMPORT UTILS

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=05137cc1951d47679028fea34e722419&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

const Auth = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <a href={AUTH_URL}>Login with Spotify</a>
    </div>
  );
};

export default Auth;
