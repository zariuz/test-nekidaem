const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

const defaultState = {
  isAuth: false,
};

export default function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
}

export const setUser = () => ({type: SET_USER});
export const logout = () => ({type: LOGOUT});
