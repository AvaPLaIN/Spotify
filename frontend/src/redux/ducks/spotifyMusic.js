//! CONSTANTS
export const SET_TRACKS = 'REDUX/MUSIC/SET_TRACKS';
export const SET_CURRENT_SONG = 'REDUX/MUSIC/SET_CURRENT_SONG';

//! INITIALSTATE
const initialState = {
  tracks: undefined,
  currentTrack: undefined,
};

//! REDUCERS
const reducer = (state = initialState, action) => {
  const { tracks, currentTrack } = action;
  switch (action.type) {
    case SET_TRACKS:
      return { ...state, tracks };
    case SET_CURRENT_SONG:
      return { ...state, currentTrack };
    default:
      return state;
  }
};

//! ACTIONS
export const setTracks = ({ tracks }) => ({
  type: SET_TRACKS,
  tracks,
});

export const setCurrentTrack = (currentTrack) => ({
  type: SET_CURRENT_SONG,
  currentTrack,
});

//! EXPORT
export default reducer;
