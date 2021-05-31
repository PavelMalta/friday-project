import s from "./LoginPage.module.scss";
import { Input } from "../../../common/input/Input";
import { Button } from "../../../common/button/Button";
import { Logo } from "../../../common/logo/Logo";
import { TitleH2 } from "../../../common/titleh2/TitleH2";
import React, {ChangeEvent} from "react";

type LoginPagePropsType = {
    email: string
    password: string
    rememberMe: boolean
    onclickHandler: () => void
    onChangeEmail: (email: string) => void
    onChangePassword: (password: string)=> void
    onChangeRememberMe: (rememberMe: boolean) => void

}

export const LoginPage = (props:LoginPagePropsType) => {
    debugger

    const changeEmail = (value: string) => {
        props.onChangeEmail(value)
    }
    const changePassword = (value: string) => {
        props.onChangePassword(value)
    }
    const changeRememberMe = (value: boolean) => {
        props.onChangeRememberMe(value)
    }

    return (
        <div className={s.loginPage}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2/>
                    <div className={s.form}>
                        <Input title="Email"
                                type= "email"
                                name="email"
                               placeholder={'email'}
                                value={props.email}
                                onChange={changeEmail}
                               style= {{marginTop:"25px"}}
                        />   {/* Нужно убрать глазик (логика) */}
                        <Input title="Password"
                                type= "password"
                                name="password"
                               placeholder={'password'}
                                value={props.password}
                                onChange={changePassword}
                            style= {{marginTop:"25px"}}
                        />
                    </div>
                    <a className={s.linkPassword} href="#">Forgot Password</a>
                    <div className={s.btn}>
                        <Button value="Login"
                                onClick={props.onclickHandler}
                        />
                    </div>
                    <div className={s.singUp}>
                        <a className={s.span} href="#">Don’t have an account?</a>
                        <a className={s.linkSingUp} href="#">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}