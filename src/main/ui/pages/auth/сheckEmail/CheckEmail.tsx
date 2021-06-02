import s from "./CheckEmail.module.scss";
import { Logo } from "../../../common/logo/Logo";
import { TitleH2 } from "../../../common/titleh2/TitleH2";
import EmailIcon from "./../../../assets/images/loginPage/EmailIcon.svg";

export const CheckEmail = () => {
    return (
        <div className={s.forgotPassword}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <img className={s.icon} src={EmailIcon} alt="EmailIcon"/>
                    <TitleH2 value="Check Email"/>
                    <span className={s.text}>We’ve sent an Email with instructions to example@mail.com</span>
                </div>
            </div>
        </div>
    )
}