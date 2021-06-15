import s from "./ForgotPassword.module.scss";
import {Input} from "../../../../common/input/Input";
import {Button} from "../../../../common/button/Button";
import {Logo} from "../../../../common/logo/Logo";
import {TitleH2} from "../../../../common/titleh2/TitleH2";

export type ForgotPasswordPropsType = {
    email: string
    error: string | null
    onChangeEmail: (value: string) => void
    onclickHandler: () => void
    isFetching: boolean
}

export const ForgotPassword = (props: ForgotPasswordPropsType) => {
    return (
        <div className={s.forgotPassword}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2 style={{marginTop: "32px"}}
                            value="Forgot your password?"/>
                    <div className={s.form}>
                        <Input title="Email"
                               type="email"
                               name="email"
                               value={props.email}
                               onChange={props.onChangeEmail}
                               error={props.error}
                        /> 
                    </div>
                    <span className={s.text}>Enter your email address and we will send you further instructions </span>
                    <div className={s.btn}>
                        {props.isFetching
                            ? <span>Loading...</span>
                            : <Button value="Send Instructions"
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