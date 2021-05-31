import {useDispatch} from "react-redux"
import React, {useState} from "react";
import {getAuthUserData} from "../../../../store/login-reducer";
import {LoginPage} from "./LoginPage";

export const LoginContainer = () => {

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
        dispatch(getAuthUserData(email, password, rememberMe))
        setEmail('')
        setPassword('')
        setRememberMe(false)
    }

    return <LoginPage email={email}
                      password={password}
                      rememberMe={rememberMe}
                      onclickHandler={onclickHandler}
                      onChangeEmail={onChangeEmail}
                      onChangePassword={onChangePassword}
                      onChangeRememberMe={onChangeRememberMe}/>


}