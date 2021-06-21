import s from "./Tab.module.scss";
import List from "./../../../assets/images/head/packList.svg";
import Profile from "./../../../assets/images/head/profole.svg";
import {routes} from "../../../../router/routes";
import React from "react";
import {NavLink} from "react-router-dom";


export const Tab = () => {
    return (
        <div className={s.wrapper}>
            <NavLink to={routes.packs}>
                <button className={s.btn}>
                    <img className={s.icon} src={List} alt="icon list"/>
                    <span className={s.span}>Packs list</span>
                </button>
            </NavLink>
            <NavLink to={routes.profile}>
                <button className={s.btn}>
                    <img className={s.icon} src={Profile} alt="icon list"/>
                    <span className={s.span}>Profile</span>
                </button>
            </NavLink>
        </div>
    )
}