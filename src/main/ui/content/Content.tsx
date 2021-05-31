import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import s from "./Content.module.css"
import {routes} from "../../router/routes";
import {Profile} from "./components/profile/Profile";
import {NotFound} from "./components/notFound/NotFound";
import {PasswordRecover} from "./components/passwordRecover/PasswordRecover";
import {NewPassword} from "./components/newPassword/NewPassword";
import {Presentation} from "./components/presentation/Presentation";
// import {LoginPage} from "./components/login/Login";
import {LoginPage} from "../pages/auth/loginPage/LoginPage";
import {RegistrationContainer} from "../pages/auth/register/RegistrationContainer";

export const Content = () => {
    return (
        <div className={s.contentContainer}>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={routes.login}/>}/>
                <Route exact path={routes.login} render={() => <LoginPage/>} />
                <Route exact path={routes.registration} render={() => <RegistrationContainer/>} />
                <Route exact path={routes.profile} render={() => <Profile/>} />
                <Route exact path={routes.passwordRecover} render={() => <PasswordRecover/>} />
                <Route exact path={routes.newPassword} render={() => <NewPassword/>} />
                <Route exact path={routes.presentation} render={() => <Presentation/>} />
                <Route render={() => <NotFound/>} />

            </Switch>
        </div>
    )
}