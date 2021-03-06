import {useDispatch, useSelector} from "react-redux"
import React, {useState} from "react";
import {getAuthUserData, setEmailErrorAC, setPasswordErrorAC} from "../../../../store/login-reducer";
import {LoginPage} from "./LoginPage";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";
import {Preloader} from "../../../common/preloader/Preloader";
import {routes} from "../../../../router/routes";

export const LoginContainer = () => {

    const isFetching = useSelector<AppRootStateType, boolean>((state) => state.login.isFetching)
    const emailError = useSelector<AppRootStateType, string | null>((state) => state.login.emailError)
    const passwordError = useSelector<AppRootStateType, string | null>((state) => state.login.passwordError)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    const dispatch = useDispatch()

    let [email, setEmail] = useState<string>('forpaul@mail.ru')
    let [password, setPassword] = useState<string>('12345678')
    let [rememberMe, setRememberMe] = useState<boolean>(false)

    const onChangeEmail = (email: string) => {
        setEmail(email)
        if (emailError !== null) {
            dispatch(setEmailErrorAC(null))
        }
    }
    const onChangePassword = (password: string) => {
        setPassword(password)
        if (passwordError !== null) {
            dispatch(setPasswordErrorAC(null))
        }
    }
    const onChangeRememberMe = (rememberMe: boolean) => {
        setRememberMe(!rememberMe)
    }

    let onclickHandler = () => {
        if (email === "") {
            dispatch(setEmailErrorAC('Required'))
        } else if (password === "") {
            dispatch(setPasswordErrorAC('Required'))
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            dispatch(setEmailErrorAC('Invalid email address'))
        } else if (password.length < 8) {
            dispatch(setPasswordErrorAC('Password must be more 7 symbols'))
        } else {
            dispatch(getAuthUserData(email, password, rememberMe))
            setEmail('')
            setPassword('')
            setRememberMe(false)
        }
    }

    if (isFetching) {
        return <Preloader/>
    }
    if (isAuth) {
        return <Redirect to={routes.profile}/>
    }

    return    <LoginPage email={email}
                      emailError={emailError}
                      passwordError={passwordError}
                      password={password}
                      rememberMe={rememberMe}
                      onclickHandler={onclickHandler}
                      onChangeEmail={onChangeEmail}
                      onChangePassword={onChangePassword}
                      onChangeRememberMe={onChangeRememberMe}/>



}