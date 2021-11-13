//! CONSTANTS
export const SET_AUTH_USER = 'REDUX/AUTH/SET_AUTH_USER';
export const SET_AUTH_ACCESS_TOKEN = 'REDUX/AUTH/SET_AUTH_ACCESS_TOKEN';

//! INITIALSTATE
const initialState = {
  accessToken: undefined,
  refreshToken: undefined,
  expiresIn: undefined,
};

//! REDUCERS
const reducer = (state = initialState, action) => {
  const { accessToken, refreshToken, expiresIn } = action;
  switch (action.type) {
    case SET_AUTH_USER:
      return { ...state, accessToken, refreshToken, expiresIn };
    case SET_AUTH_ACCESS_TOKEN:
      return { ...state, accessToken };
    default:
      return state;
  }
};

//! ACTIONS
export const setAuthUser = ({ accessToken, refreshToken, expiresIn }) => ({
  type: SET_AUTH_USER,
  accessToken,
  refreshToken,
  expiresIn,
});

export const setAuthAccessToken = ({ accessToken }) => ({
  type: SET_AUTH_ACCESS_TOKEN,
  accessToken,
});

//! EXPORT
export default reducer;
