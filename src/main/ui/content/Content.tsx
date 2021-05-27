import React from "react";
import {Route, Switch} from "react-router-dom";
import s from "./Content.module.css"
import {routes} from "../../router/routes";
import {Login} from "./components/login/Login";
import {Registration} from "./components/registration/Registration";
import {Profile} from "./components/profile/Profile";
import {NotFound} from "./components/notFound/NotFound";
import { PasswordRecover } from "./components/passwordRecover/PasswordRecover";
import {NewPassword} from "./components/newPassword/NewPassword";
import {Presentation} from "./components/presentation/Presentation";

export const Content = () => {
    return (
        <div className={s.contentContainer}>
            <Switch>
                <Route exact path={routes.login} render={() => <Login/>} />
                <Route exact path={routes.registration} render={() => <Registration/>} />
                <Route exact path={routes.profile} render={() => <Profile/>} />
                <Route exact path={routes.passwordRecover} render={() => <PasswordRecover/>} />
                <Route exact path={routes.newPassword} render={() => <NewPassword/>} />
                <Route exact path={routes.presentation} render={() => <Presentation/>} />
                <Route render={() => <NotFound/>} />
            </Switch>
        </div>
    )
}