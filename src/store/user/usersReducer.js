import {LOGOUT, SET_USER} from '../../actions/users';

const initialState = {
  isAuth: false,
};

export default function usersReducer(state = initialState, action) {
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
