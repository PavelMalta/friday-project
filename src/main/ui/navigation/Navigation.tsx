import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navigation.module.css"


export const Navigation = () => {
    return (
        <div className={s.navigationContainer}>
            <h1>Navigation</h1>
            <div className={s.linksList}>
                <NavLink to={'/'}>Login</NavLink>
                <NavLink to={'/'}>Registration</NavLink>
                <NavLink to={'/'}>Profile</NavLink>
                <NavLink to={'/'}>404</NavLink>
                <NavLink to={'/'}>Password Recover</NavLink>
                <NavLink to={'/'}>New Password</NavLink>
                <NavLink to={'/'}>Presentation</NavLink>
            </div>
        </div>
    )
}