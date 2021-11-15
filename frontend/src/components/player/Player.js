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
      <SpotifyPlayer
        autoplay
        play={true}
        token={accessToken}
        uris={[uri]}
        styles={{
          bgColor: '#706b6b',
          color: '#fff',
          sliderColor: 'grey',
          trackArtistColor: '#fff',
          trackNameColor: '#fff',
        }}
      />
    </PlayerComponent>
  );
};

export default Player;
