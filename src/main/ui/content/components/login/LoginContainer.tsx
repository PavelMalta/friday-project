import {useDispatch, useSelector} from "react-redux"
import React, {useState} from "react";
import {getAuthUserData, setErrorAC} from "../../../../store/login-reducer";
import {LoginPage} from "./LoginPage";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";

export const LoginContainer = () => {

    const isFetching = useSelector<AppRootStateType, boolean>((state) => state.login.isFetching)
    const error = useSelector<AppRootStateType, string | null>((state) => state.login.error)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    const dispatch = useDispatch()

    let [email, setEmail] = useState<string>('nya-admin@nya.nya')
    let [password, setPassword] = useState<string>('1qazxcvBG')
    let [rememberMe, setRememberMe] = useState<boolean>(false)

    const onChangeEmail = (email: string) => {
        setEmail(email)
    }
    const onChangePassword = (password: string) => {
        setPassword(password)
    }
    const onChangeRememberMe = (rememberMe: boolean) => {
        setRememberMe(!rememberMe)
    }

    let onclickHandler = () => {
        if (email === "" || password === "") {
            dispatch(setErrorAC('Required'))
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            dispatch(setErrorAC('Invalid email address'))
        } else if (password.length < 8) {
            dispatch(setErrorAC('Password must be more 7 symbols'))
        } else {
            dispatch(getAuthUserData(email, password, rememberMe))
            setEmail('')
            setPassword('')
            setRememberMe(false)
        }
    }

    if (isFetching) {
        return <div>Loading...</div>
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <LoginPage email={email}
                      error={error}
                      password={password}
                      rememberMe={rememberMe}
                      onclickHandler={onclickHandler}
                      onChangeEmail={onChangeEmail}
                      onChangePassword={onChangePassword}
                      onChangeRememberMe={onChangeRememberMe}/>


}