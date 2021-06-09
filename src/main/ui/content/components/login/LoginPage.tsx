import s from "./LoginPage.module.scss";
import {Input} from "../../../common/input/Input";
import {Button} from "../../../common/button/Button";
import {Logo} from "../../../common/logo/Logo";
import {TitleH2} from "../../../common/titleh2/TitleH2";
import React, {ChangeEvent, useState} from "react";
import {NavLink} from "react-router-dom";
import {routes} from "../../../../router/routes";

type LoginPagePropsType = {
    email: string
    emailError: string | null
    passwordError: string | null
    password: string
    rememberMe: boolean
    onclickHandler: () => void
    onChangeEmail: (email: string) => void
    onChangePassword: (password: string)=> void
    onChangeRememberMe: (rememberMe: boolean) => void

}

export const LoginPage = (props:LoginPagePropsType) => {

    const changeEmail = (value: string) => {
        props.onChangeEmail(value)
    }
    const changePassword = (value: string) => {
        props.onChangePassword(value)
    }
    const changeRememberMe = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeRememberMe(e.currentTarget.checked)
    }

    const [passwordType, setPasswordType] = useState<"password" | "text">("password");

    const togglePasswordType = () => {
        if (passwordType === 'text') {
            setPasswordType('password')
        } else setPasswordType('text')
    }


    return (
        <div className={s.loginPage}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2 value= "Sign In"/>
                    <div className={s.form}>
                        <Input title="Email"
                               type= "email"
                               name="email"
                               error={props.emailError}
                               placeholder={'email'}
                               value={props.email}
                               onChange={changeEmail}
                               style= {{marginTop:"25px"}}
                               idName={'inputEmail'}
                        />

                        {/* Нужно убрать глазик (логика) */}
                        <Input title="Password"
                               // type= "password"
                               type= {passwordType}
                               name="password"
                               error={props.passwordError}
                               placeholder={'password'}
                               value={props.password}
                               onChange={changePassword}
                               style= {{marginTop:"25px"}}
                               idName={'inputPassword'}
                               id= "checkbox2"
                               htmlFor= "checkbox2"
                               changeVision={togglePasswordType}
                        />

                    </div>


                    <div className={s.wrap}>
                        <div className={s.checkbox}>

                            <input className={s.checkboxInput} type="checkbox" id="checkbox1"
                            />
                            <label className={s.checkboxLable} htmlFor="checkbox1">Rememder me</label>
                        </div>
                        <NavLink className={s.linkPassword} to={routes.passwordRecover}>Forgot Password</NavLink>
                        {/*<a className={s.linkPassword} href="">Forgot Password</a>*/}
                    </div>
                    <div className={s.btn}>
                        <Button value="Login"
                                onClick={props.onclickHandler}

                        />
                    </div>
                    <div className={s.singUp}>
                        <label className={s.span} >Don’t have an account?</label>
                        <NavLink className={s.linkSingUp} to={routes.registration}>Sign Up</NavLink>
                        {/*<a className={s.linkSingUp} href="#">Sign Up</a>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}