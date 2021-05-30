import s from "./LoginPage.module.scss";
import { Input } from "../../../common/input/Input";
import { Button } from "../../../common/button/Button";
import { Logo } from "../../../common/logo/Logo";
import { TitleH2 } from "../../../common/titleh2/TitleH2";




export const LoginPage = () => {
    return (
        <div className={s.loginPage}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2/>
                    <div className={s.form}>
                        <Input title="Email"
                                type= "email"
                                name="email" />   {/* Нужно убрать глазик (логика) */}
                        <Input title="Password"
                                type= "password"
                                name="password"
                            style= {{marginTop:"25px"}} />
                    </div>
                    <a className={s.linkPassword} href="#">Forgot Password</a>
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