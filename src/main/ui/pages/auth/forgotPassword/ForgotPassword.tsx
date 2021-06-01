import s from "./ForgotPassword.module.scss";
import { Input } from "../../../common/input/Input";
import { Button } from "../../../common/button/Button";
import { Logo } from "../../../common/logo/Logo";
import { TitleH2 } from "../../../common/titleh2/TitleH2";

export const ForgotPassword = () => {
    return (
        <div className={s.forgotPassword}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2 value="Sign In"/>
                    <div className={s.form}>
                        <Input title="Email"
                            type= "email"
                            name="email" />   {/*Нужно убрать глазик (логика)*/}
                    </div>
                    <span className={s.text}>Enter your email address and we will send you further instructions </span>
                    <div className={s.btn}>
                        <Button value="Send Instructions"/>
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