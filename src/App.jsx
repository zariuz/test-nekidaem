import React, {useEffect} from 'react';
import {Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Navbar} from './components/navbar/Navbar';
import {Registration} from './components/authorization/Registration';
import {Login} from './components/authorization/Login';
import {Columns} from './containers/Columns';
import {auth} from './api/user';
import {getCards} from './api/card';
import './app.scss';
import {initUser} from './actions/users';

export const App = () => {
  const initApp = useSelector((state) => state.users.initial);
  const isAuth = useSelector((state) => state.users.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuth) {
      dispatch(auth());
    }
  }, [dispatch, isAuth]);

  useEffect(() => {
    if (!isAuth) dispatch(getCards());
  }, [dispatch, isAuth]);

  return (
    <HashRouter>
      <div className="app">
        {console.log('App Render')}
        <Navbar />
        <div className="wrap">
          {!isAuth ? (
            <Switch>
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={Columns} />
              <Redirect to="/" />
            </Switch>
          )}
        </div>
      </div>
    </HashRouter>
  );
};
