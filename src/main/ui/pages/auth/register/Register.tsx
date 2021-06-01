import s from "./Register.module.scss";
import {Input} from "../../../common/input/Input";
import {Button} from "../../../common/button/Button";
import {Logo} from "../../../common/logo/Logo";
import {TitleH2} from "../../../common/titleh2/TitleH2";
import React from "react";


export const Register = () => {
    return (
        <div className={s.loginPage}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2 value="Sign Up"/>
                    <div className={s.form}>
                        <Input title="Email"
                               type="email"
                               placeholder={'email'}
                               style={{marginTop: "25px"}}
                               name="email"/> {/* Нужно убрать глазик (логика) */}
                        <Input title="Password"
                               type="password"
                               placeholder={'password'}
                               name="password"
                               style={{marginTop: "25px"}}
                               id= "checkbox3"
                               htmlFor= "checkbox3"
                               style= {{marginTop: "25px"}} />
                        <Input title="Confirm password"
                               type="password"
                               name="Confirm password"
                               placeholder={'password'}
                               id="checkbox4"
                               htmlFor="checkbox4"
                               style={{marginTop: "25px"}}/>
                    </div>
                    <form className={s.btn}>
                        <Button value="Cancel"
                                onClick={() => {
                                }}
                                style={{
                                    width: "124px",
                                    backgroundColor: "#CDCEF4",
                                    color: "#21268F",
                                    marginRight: "36px"
                                }}/>
                        <Button value="Register"
                                onClick={() => {
                                }}
                                style={{width: "187px"}}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}