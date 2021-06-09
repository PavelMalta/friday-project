import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import s from "./Content.module.css"
import {routes} from "../../router/routes";
import {Profile} from "./components/profile/Profile";
import {NotFound} from "./components/notFound/NotFound";
import {NewPassword} from "./components/newPassword/NewPassword";
import {Presentation} from "./components/presentation/Presentation";
import {RegistrationPage} from "./components/registration/RegistrationPage";
import {LoginContainer} from "./components/login/LoginContainer";
import {PasswordRecoverContainer} from "./components/passwordRecover/PasswordRecoverContainer";
import {CardsTable} from "./components/cards/cardsTable/CardsTable";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {Preloader} from "../common/preloader/Preloader";
import {Cards} from "./components/cards/Cards";
import {Packs} from "./components/packs/Packs";


export const Content = () => {

    return (
        <div className={s.contentContainer}>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={routes.login}/>}/>
                <Route exact path={routes.login} render={() => <LoginContainer/>} />
                <Route exact path={routes.registration} render={() => <RegistrationPage/>} />
                <Route exact path={routes.profile} render={() => <Profile/>} />
                <Route exact path={routes.passwordRecover} render={() => <PasswordRecoverContainer/>} />
                <Route exact path={routes.newPassword} render={() => <NewPassword/>} />
                <Route exact path={routes.presentation} render={() => <Presentation/>} />
                <Route exact path={routes.packs} render={() => <Packs/>} />
                <Route path={routes.cards} render={() => <Cards/>} />

                <Route render={() => <NotFound/>} />

            </Switch>
        </div>
    )
}