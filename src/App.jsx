import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Navbar} from './components/navbar/Navbar';
import {Registration} from './components/authorization/Registration';
import {Login} from './components/authorization/Login';
import {Columns} from './containers/Columns';
import {auth} from './api/user';
import './app.scss';

export const App = () => {
  const isAuth = useSelector((state) => state.users.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
