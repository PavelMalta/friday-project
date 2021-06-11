import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer";
import {loginReducer} from "./login-reducer";
import {passwordRecoverReducer} from "./passwordRecover-reducer";
import {profileReducer} from "./profile-reducer";
import {registrationReducer} from "./registration-reducer";
import {packsReducer} from "./packs-reducer";
import {cardsReducer} from "./cards-reducer";
import {resetPasswordReducer} from "./newPassword-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    newPassword: resetPasswordReducer,
    passwordRecover: passwordRecoverReducer,
    profile: profileReducer,
    registration: registrationReducer,
    packs: packsReducer,
    cards: cardsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;