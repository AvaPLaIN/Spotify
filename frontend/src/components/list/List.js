//! IMPORTS
//     ? IMPORT REACT

//     ? IMPORT REDUX
import { useSelector, useDispatch } from 'react-redux';

//     ? IMPORT LIBRARIES
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

//     ? IMPORT API

//     ? IMPORT HOOKS

//     ? IMPORT PAGES

//     ? IMPORT COMPONENTS
import { ListComponent } from './List.styled';
import ListItem from '../list-item/ListItem';
import { setCurrentTrack } from '../../redux/ducks/spotifyMusic';

//     ? IMPORT UTILS

const List = () => {
  //! INIT
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state?.music?.tracks);

  //! HANDLER
  const handleSetCurrentSong = (track) => {
    dispatch(setCurrentTrack(track));
  };

  return (
    <ListComponent>
      <div className="list">
        <div className="header">
          <span>Title</span>
          <span></span>
          <span>Album</span>
          <span>
            <FontAwesomeIcon icon={faClock} />
          </span>
        </div>
        {tracks?.items?.map((track) => (
          <ListItem
            track={track}
            setCurrentSong={handleSetCurrentSong}
            key={uuidv4()}
          />
        ))}
      </div>
    </ListComponent>
  );
};

export default List;
