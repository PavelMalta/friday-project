import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer";
import {loginReducer} from "./login-reducer";
import {newPasswordReducer} from "./newPassword-reducer";
import {passwordRecoverReducer} from "./passwordRecover-reducer";
import { profileReducer } from "./profile-reducer";
import {registrationReducer} from "./registration-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    newPassword: newPasswordReducer,
    passwordRecover: passwordRecoverReducer,
    profile: profileReducer,
    registration: registrationReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;