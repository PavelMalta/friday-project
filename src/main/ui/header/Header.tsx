import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {routes} from "../../router/routes";

export const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div className={s.navLinkContainer}>
                <NavLink to={routes.login}>Login</NavLink>
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