import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {getAuthUserData} from "../../../../store/login-reducer";
import SuperInputText from "../../../common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../common/c2-SuperButton/SuperButton";

export const LoginPage = () => {

    const dispatch = useDispatch()

    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [rememberMe, setRememberMe] = useState<boolean>(false)

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onChangeRememberMe = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }

    let onclickHandler = () => {
        dispatch(getAuthUserData(email, password, rememberMe))
    }

    return (<div>
            <h4>SIGN IN</h4>
            <SuperInputText type={'email'}
                            placeholder={'Enter email'}
                            onChange={onChangeEmail}/>
            <SuperInputText type={'password'}
                            placeholder={'Password'}
                            onChange={onChangePassword}/>
            <SuperCheckbox type={'checkbox'} onChange={onChangeRememberMe}>Remember me</SuperCheckbox>
            <SuperButton onClick={onclickHandler}>Login</SuperButton>
        </div>
    );
}