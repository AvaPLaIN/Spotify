//! IMPORTS
//     ? IMPORT REACT

//     ? IMPORT REDUX
import { useSelector } from 'react-redux';

//     ? IMPORT LIBRARIES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRandom,
  faStepBackward,
  faStepForward,
  faPlay,
  faRedo,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';

//     ? IMPORT API

//     ? IMPORT HOOKS

//     ? IMPORT PAGES

//     ? IMPORT COMPONENTS
import { ControllsComponent } from './Controlls.styled';
import Player from '../player/Player';

//     ? IMPORT UTILS
import {
  convertMillisecondsToSeconds,
  convertMillisecondsToTimeFormat,
} from '../../helpers/converting';

const Controlls = () => {
  //! INIT
  const currentTrack = useSelector((state) => state?.music?.currentTrack);
  const accessToken = useSelector((state) => state?.auth?.accessToken);

  return (
    <ControllsComponent>
      <div className="songInfo">
        <img src={currentTrack?.album?.images[0]?.url} alt="" />
        <div className="songDetails">
          <h2 className="trackName">{currentTrack?.name}</h2>
          <div className="artists">
            {currentTrack?.artists?.map((artist) => (
              <h3>{artist?.name}</h3>
            ))}
          </div>
        </div>
      </div>
      <div className="controller">
        <div className="controlls">
          <FontAwesomeIcon className="controllButton" icon={faRandom} />
          <FontAwesomeIcon className="controllButton" icon={faStepBackward} />
          <FontAwesomeIcon className="play" icon={faPlay} />
          <FontAwesomeIcon className="controllButton" icon={faStepForward} />
          <FontAwesomeIcon className="controllButton" icon={faRedo} />
        </div>
        <div className="timeline">
          <p>0:00</p>
          <input
            type="range"
            min="0"
            max={convertMillisecondsToSeconds(currentTrack?.duration_ms)}
            step="0.01"
          />
          <p>{convertMillisecondsToTimeFormat(currentTrack?.duration_ms)}</p>
        </div>
      </div>
      <div className="features">
        <FontAwesomeIcon className="controllButton" icon={faVolumeUp} />
        <input type="range" min="0" max="1" step="0.01" />
      </div>
      <Player accessToken={accessToken} uri={currentTrack?.uri} />
    </ControllsComponent>
  );
};

export default Controlls;
