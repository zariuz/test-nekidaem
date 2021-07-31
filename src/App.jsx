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

export const App = () => {
  const isAuth = useSelector((state) => state.users.isAuth);
  const cards = useSelector((state) => state.cards);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) dispatch(auth());
  }, []);

  useEffect(() => {
    dispatch(getCards());
  }, []);

  return (
    <HashRouter>
      <div className="app">
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
