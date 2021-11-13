//! IMPORTS
//     ? IMPORT REACT
import { useEffect } from 'react';

//     ? IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';

//     ? IMPORT LIBRARIES

//     ? IMPORT API
import { authLoginWithSpotify, authRefreshToken } from '../api/auth';
import { setAuthAccessToken, setAuthUser } from '../redux/ducks/spotifyAuth';

//     ? IMPORT HOOKS

//     ? IMPORT PAGES

//     ? IMPORT COMPONENTS

//     ? IMPORT UTILS

const useSpotifyAuth = (code) => {
  //! INIT
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const refreshToken = useSelector((state) => state.auth.refreshToken);

  //! USE-EFFECT
  //     ? AUTH SPOTIFY USER
  useEffect(() => {
    window.history.pushState({}, null, '/');
    if (!code) return null;

    const authSpotifyUser = async () => {
      try {
        const fetchData = await authLoginWithSpotify(code);

        //! ERROR HANDLING
        const { isAuthError } = fetchData;
        if (isAuthError) throw fetchData.error;

        const { data } = fetchData?.data;
        dispatch(setAuthUser(data));
      } catch (error) {
        throw error;
      }
    };

    authSpotifyUser();
  }, [code, dispatch]);

  //     ? REFRESH JWT ACCESS TOKEN
  useEffect(() => {
    if (!accessToken) return;

    const refreshAccessToken = () => {
      try {
        const timeout = setTimeout(async () => {
          const fetchData = await authRefreshToken(refreshToken);

          //! ERROR HANDLING
          const { isAuthError } = fetchData;
          if (isAuthError) throw fetchData.error;

          const { data } = fetchData?.data;
          dispatch(setAuthAccessToken(data));
        }, 3500000);

        return () => clearTimeout(timeout);
      } catch (error) {
        throw error;
      }
    };

    refreshAccessToken();
  }, [accessToken]);
};

export default useSpotifyAuth;
