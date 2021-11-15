//! IMPORTS
//     ? IMPORT REACT
import { useState, useEffect } from 'react';

//     ? IMPORT REDUX
import { useDispatch, useSelector } from 'react-redux';

//     ? IMPORT LIBRARIES
import SpotifyWebApi from 'spotify-web-api-node';
import debounce from 'lodash.debounce';

//     ? IMPORT API

//     ? IMPORT HOOKS

//     ? IMPORT PAGES

//     ? IMPORT COMPONENTS
import { SearchbarComponent } from './Searchbar.styled';
import { setTracks } from '../../redux/ducks/spotifyMusic';

//     ? IMPORT UTILS

const Searchbar = () => {
  //! INIT
  const dispatch = useDispatch();
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  });
  const accessToken = useSelector((state) => state.auth.accessToken);

  //! USE-STATE
  const [searchTitle, setSearchTitle] = useState();

  //! USE-EFFECT
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!searchTitle) return;
    const fetchSongs = async () => {
      try {
        //TODO fix setAccessToken in useEffect
        await spotifyApi.setAccessToken(accessToken);
        //TODO fix

        const fetchData = await spotifyApi.searchTracks(searchTitle);
        dispatch(setTracks(fetchData?.body));
      } catch (error) {
        throw error;
      }
    };
    fetchSongs();
  }, [searchTitle]);

  //! HANDLER
  const handleSetSearchTitle = (e) => {
    setSearchTitle(e?.target?.value);
  };

  const handleDebounceSetSearchTitle = debounce(handleSetSearchTitle, 700);

  return (
    <SearchbarComponent>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleDebounceSetSearchTitle}
        />
      </form>
    </SearchbarComponent>
  );
};

export default Searchbar;
