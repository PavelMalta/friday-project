import React from "react";
import s from "./NewPassword.module.scss";
import {Input} from "../../../common/input/Input";
import {Button} from "../../../common/button/Button";
import {Logo} from "../../../common/logo/Logo";
import {TitleH2} from "../../../common/titleh2/TitleH2";

export type NewPasswordPropsType = {
    password: string
    email: string
    error: string | null
    onChangePassword: (value: string) => void
    onclickHandler: () => void
    isFetching: boolean
}

export const NewPassword = (props: any) => {
    return (
        <div className={s.newPassword}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2 value="Create new password"/>
                    <div className={s.form}>
                        <Input title="New password"
                               type="password"
                               name="password"
                               value={props.password}
                               onChange={props.onChangePassword}
                               error={props.error}
                        /> {/*Нужно убрать глазик (логика)*/}
                    </div>
                    <span className={s.text}>Create new password and we will send you further instructions to email </span>
                    <div className={s.btn}>
                        {props.isFetching
                            ? <span>Loading...</span>
                            : <Button value="Create new password"
                                      onClick={props.onclickHandler}
                            />}
                    </div>
                    <div className={s.singUp}>
                        <a className={s.link} href="#">Did you remember your password?</a>
                        <a className={s.linkSingUp} href="#">Try logging in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
