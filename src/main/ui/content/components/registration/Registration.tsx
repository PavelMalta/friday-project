import s from "./Registration.module.scss";
import {Input} from "../../../common/input/Input";
import {Button} from "../../../common/button/Button";
import {Logo} from "../../../common/logo/Logo";
import {TitleH2} from "../../../common/titleh2/TitleH2";
import React, {useState} from "react";

type RegistrationPropsType = {
    email: string
    password: string
    passwordConfirm: string
    emailError: string | null
    passwordError: string | null
    onEmailChange: (email: string) => void
    onPasswordChange: (password: string) => void
    onPasswordConfirmChange: (passwordConfirm: string) => void
    registrationButtonClick: () => void
    cancelClick: () => void
}

export const Registration = (props: RegistrationPropsType) => {

    const emailChange = (value: string) => {
        props.onEmailChange(value)
    }

    const passwordChange = (value: string) => {
        props.onPasswordChange(value)
    }

    const passwordConfirmChange = (value: string) => {
        props.onPasswordConfirmChange(value)
    }


    const [passwordType, setPasswordType] = useState<"password" | "text">("password");
    const [passwordConfirmType, setPasswordConfirmType] = useState<"password" | "text">("password");

    const togglePasswordType = () => {
            if (passwordType === 'text') {
                setPasswordType('password')
            } else setPasswordType('text')
    }

    const togglePasswordConfirmType = () => {
        if (passwordConfirmType === 'text') {
            setPasswordConfirmType('password')
        } else setPasswordConfirmType('text')
    }

    return (
        <div className={s.loginPage}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2 style={{marginTop: "25px"}}
                            value="Sign Up"
                    />
                    <div className={s.form}>
                        <Input title="Email"
                               type="email"
                               name="email"
                               value={props.email}
                               error={props.emailError}
                               onChange={emailChange}/> {/* ?????????? ???????????? ???????????? (????????????) */}

                        <Input title="Password"
                               type={passwordType}
                               name="password"
                               id= "checkbox2"
                               htmlFor= "checkbox2"
                               value={props.password}
                               error={props.passwordError}
                               onChange={passwordChange}
                               changeVision={togglePasswordType}
                               idName='inputPassword'
                               style={{marginTop: "25px"}}/>

                        <Input title="Confirm password"
                               type={passwordConfirmType}
                               name="Confirm password"
                               idName='inputPassword'
                               id= "checkbox"
                               htmlFor= "checkbox"
                               error={props.passwordError}
                               value={props.passwordConfirm}
                               onChange={passwordConfirmChange}
                               changeVision={togglePasswordConfirmType}
                               style={{marginTop: "25px"}}/>
                    </div>
                    <form className={s.btn}>
                        <Button value="Cancel"
                                onClick={props.cancelClick}
                                style={{
                                    width: "124px",
                                    backgroundColor: "#CDCEF4",
                                    color: "#21268F",
                                }}/>
                        <Button value="Registration"
                                onClick={props.registrationButtonClick}
                                style={{width: "187px"}}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}