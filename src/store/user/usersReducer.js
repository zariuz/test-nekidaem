import { INIT_USER, LOGOUT, SET_USER } from "../../actions/users";

const initialState = {
  initial: false,
  isAuth: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_USER:
      return {
        ...state,
        initial: true,
      };
    case SET_USER:
      return {
        ...state,
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        initial: false,
        isAuth: false,
      };
    default:
      return state;
  }
}
