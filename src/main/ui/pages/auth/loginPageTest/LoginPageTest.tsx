import s from "./LoginPageTest.module.scss";
import { Input } from "../../../common/input/Input";
import { Button } from "../../../common/button/Button";
import { Logo } from "../../../common/logo/Logo";
import { TitleH2 } from "../../../common/titleh2/TitleH2";
import Email from "../../../common/email/Email";
import Password from "../../../common/password/Password";




export const LoginPageTest = () => {
    return (
        <div className={s.loginPage}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2 value="Sign In"/>
                    <div className={s.form}>
                        <Email/>
                        <Password/>
                    </div>
                    <div className={s.wrap}>
                        <div className={s.checkbox}>
                            <input className={s.checkboxInput} type="checkbox" id="checkbox1"/>
                            <label className={s.checkboxLable} htmlFor="checkbox1">Rememder me</label>
                        </div>
                        <a className={s.linkPassword} href="#">Forgot Password</a>
                    </div>
                    <div className={s.btn}>
                        <Button value="Login"/>
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