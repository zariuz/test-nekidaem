import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cardsReducer from './card/cardsReducer';
import usersReducer from './user/usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  cards: cardsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
