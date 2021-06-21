import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navigation.module.css"
import {routes} from "../../router/routes";


export const Navigation = () => {
    return (
        <div className={s.navigationContainer}>
            <h2>Navigation</h2>
            <div className={s.linksList}>
                <NavLink to={routes.login}>Login</NavLink>
                <NavLink to={routes.registration}>Registration</NavLink>
                <NavLink to={routes.profile}>Profile</NavLink>
                <NavLink to={routes.notFound}>404</NavLink>
                <NavLink to={routes.passwordRecover}>Password Recover</NavLink>
                <NavLink to={routes.newPassword}>New Password</NavLink>
                <NavLink to={routes.packs}>Packs</NavLink>
                <NavLink to={routes.cards}>Cards</NavLink>
            </div>
        </div>
    )
}