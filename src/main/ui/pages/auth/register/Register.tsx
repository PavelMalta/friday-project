import s from "./Register.module.scss";
import {Input} from "../../../common/input/Input";
import {Button} from "../../../common/button/Button";
import {Logo} from "../../../common/logo/Logo";
import {TitleH2} from "../../../common/titleh2/TitleH2";
import {ChangeEvent} from "react";

type RegistrationPropsType = {
    email: string
    password: string
    passwordConfirm: string
    onEmailChange: (email: string) => void
    onPasswordChange: (password: string) => void
    onPasswordConfirmChange: (passwordConfirm: string) => void
    registrationButtonClock: () => void
    cancelClick: () => void
}

export const Register = (props: RegistrationPropsType) => {

    const emailChange = (value: string) => {
        props.onEmailChange(value)
    }

    const passwordChange = (value: string) => {
        props.onPasswordChange(value)
    }

    const passwordConfirmChange = (value: string) => {
        props.onPasswordConfirmChange(value)
    }


    return (
        <div className={s.loginPage}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2 value="Sign Up"/>
                    <div className={s.form}>
                        <Input title="Email"
                               type="email"
                               name="email"
                               value={props.email}
                               onChange={emailChange}/> {/* Нужно убрать глазик (логика) */}
                        <Input title="Password"
                                type= "password"
                                name="password"
                                id= "checkbox3"
                               value={props.password}
                               onChange={passwordChange}
                                htmlFor= "checkbox3"
                            style= {{marginTop:"25px"}} />
                            <Input title="Confirm password"
                                type= "password"
                                name="Confirm password"
                                   value={props.password}
                                   onChange={passwordConfirmChange}
                                id= "checkbox4"
                                htmlFor= "checkbox4"
                            style= {{marginTop:"25px"}} />
                    </div>
                    <form className={s.btn}>
                        <Button value="Cancel"
                                onClick={props.cancelClick}
                                style={{
                                    width: "124px",
                                    backgroundColor: "#CDCEF4",
                                    color: "#21268F",
                                    marginRight: "36px"
                                }}/>
                        <Button value="Register"
                                onClick={props.registrationButtonClock}
                                style={{width: "187px"}}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}