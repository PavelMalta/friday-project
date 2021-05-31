import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {getAuthUserData} from "../../../../store/login-reducer";
import { LoginPage } from "./LoginPage";


export const LoginContainer = () => {
    debugger

    const dispatch = useDispatch()

    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
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

    return <LoginPage
                email={email}
                password={password}
                rememberMe={rememberMe}
                onChangeEmail={onChangeEmail}
                onclickHandler={onclickHandler}
                onChangePassword={onChangePassword}
                onChangeRememberMe={onChangeRememberMe}

    />
}