//! IMPORTS
//     ? IMPORT REACT

//     ? IMPORT REDUX

//     ? IMPORT LIBRARIES
import SpotifyPlayer from 'react-spotify-web-playback';

//     ? IMPORT API

//     ? IMPORT HOOKS

//     ? IMPORT PAGES

//     ? IMPORT COMPONENTS
import { PlayerComponent } from './Player.styled';

//     ? IMPORT UTILS

const Player = ({ accessToken, uri }) => {
  return (
    <PlayerComponent>
      <SpotifyPlayer play={true} token={accessToken} uris={[uri]} />
    </PlayerComponent>
  );
};

export default Player;
