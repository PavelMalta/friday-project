import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import s from "./Content.module.scss"
import {routes} from "../../router/routes";
import {Presentation} from "./components/presentation/Presentation";
import {RegistrationPage} from "./components/registration/RegistrationPage";
import {LoginContainer} from "./components/login/LoginContainer";
import {PasswordRecoverContainer} from "./components/passwordRecover/PasswordRecoverContainer";
import {Packs} from "./components/packs/Packs";
import {Cards} from "./components/cards/Cards";
import {NewPasswordContainer} from "./components/newPassword/NewPasswordContainer";
import {EditProfile} from "./components/profile/EditProfile";
import {Error} from "./components/error/Error";



export const Content = () => {
    return (
        <div className={s.contentContainer}>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={routes.login}/>}/>
                <Route exact path={routes.login} render={() => <LoginContainer/>} />
                <Route exact path={routes.registration} render={() => <RegistrationPage/>} />
                <Route exact path={routes.profile} render={() =><EditProfile/>} />
                <Route exact path={routes.passwordRecover} render={() => <PasswordRecoverContainer/>} />
                <Route exact path={routes.newPassword} render={() => <NewPasswordContainer/>} />
                <Route exact path={routes.presentation} render={() => <Presentation/>} />
                <Route exact path={routes.packs} render={() => <Packs/>} />
                <Route path={routes.cards} render={() => <Cards/>} />
                <Route render={() => <Error/>} />
            </Switch>
        </div>
    )
}