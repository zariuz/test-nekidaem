import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/users";
import avatarLogo from "../../assets/img/avatar.svg";
import "./navbar.scss";
import { getCards } from "../../api/card";

export const Navbar = () => {
  const isAuth = useSelector((state) => state.users.isAuth);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="container">
        <NavLink to="/" className="navbar__logo">
          <div className="navbar__header">Trello</div>
        </NavLink>
        {!isAuth && (
          <div className="navbar__login">
            <NavLink to="/login">Войти</NavLink>
          </div>
        )}
        {!isAuth && (
          <div className="navbar__registration">
            <NavLink to="/registration">Регистрация</NavLink>
          </div>
        )}
        {isAuth && (
          <div className="navbar__login" onClick={() => dispatch(getCards())}>
            Получить Карточки
          </div>
        )}
        {isAuth && (
          <div className="navbar__login" onClick={() => dispatch(logout())}>
            Выход
          </div>
        )}
        {isAuth && (
          <NavLink to="/">
            <img className="navbar__avatar" src={avatarLogo} alt="" />
          </NavLink>
        )}
      </div>
    </div>
  );
};
