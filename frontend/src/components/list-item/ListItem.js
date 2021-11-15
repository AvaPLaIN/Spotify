//! IMPORTS
//     ? IMPORT REACT

//     ? IMPORT REDUX

//     ? IMPORT LIBRARIES

//     ? IMPORT API

//     ? IMPORT HOOKS

//     ? IMPORT PAGES

//     ? IMPORT COMPONENTS
import { ListItemComponent } from './ListItem.styled';

//     ? IMPORT UTILS
import { convertMillisecondsToTimeFormat } from '../../helpers/converting';

const ListItem = ({ track, setCurrentSong }) => {
  //! HANDLER
  const handleSetCurrentSong = () => {
    setCurrentSong(track);
  };

  return (
    <ListItemComponent onClick={handleSetCurrentSong}>
      <img src={track?.album?.images[0]?.url} alt="" />
      <div className="songDetails">
        <h2 className="trackName">{track?.name}</h2>
        <div className="artists">
          {track?.artists?.map((artist) => (
            <h3>{artist?.name}</h3>
          ))}
        </div>
      </div>
      <h4 className="albumName">{track?.album?.name}</h4>
      <h4 className="duration">
        {convertMillisecondsToTimeFormat(track?.duration_ms)}
      </h4>
    </ListItemComponent>
  );
};

export default ListItem;
