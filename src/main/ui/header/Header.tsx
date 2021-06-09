import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {routes} from "../../router/routes";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {logoutTC} from "../../store/login-reducer";

export const Header = () => {

    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutTC())
    }

    return (
        <div className={s.headerContainer}>
            <div className={s.navLinkContainer}>
                {isAuth
                    ? <button onClick={logoutHandler}>Logout</button>
                    : <NavLink to={routes.login}>Login</NavLink>
                }
                <NavLink to={routes.registration}>Registration</NavLink>
                <NavLink to={routes.profile}>Profile</NavLink>
                <NavLink to={routes.notFound}>404</NavLink>
                <NavLink to={routes.passwordRecover}>Password Recover</NavLink>
                <NavLink to={routes.newPassword}>New Password</NavLink>
                <NavLink to={routes.presentation}>Presentation</NavLink>
                <NavLink to={routes.packs}>Packs</NavLink>
                <NavLink to={routes.cards}>Cards</NavLink>
            </div>
        </div>
    )
}