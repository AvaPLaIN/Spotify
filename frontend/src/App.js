//! IMPORTS
//     ? IMPORT REACT
import { useEffect } from 'react';

//     ? IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';

//     ? IMPORT LIBRARIES

//     ? IMPORT API

//     ? IMPORT HOOKS
import useSpotifyAuth from './hooks/useSpotifyAuth';

//     ? IMPORT PAGES
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';

//     ? IMPORT COMPONENTS

//     ? IMPORT UTILS

import './App.css';

function App() {
  //! INIT
  const user = useSelector((state) => state.auth);
  const code = new URLSearchParams(window.location.search).get('code');
  useSpotifyAuth(code);

  return (
    <div>
      Spotify Ava Clone
      {user.accessToken && <Home />}
      <Auth />
    </div>
  );
}

export default App;
