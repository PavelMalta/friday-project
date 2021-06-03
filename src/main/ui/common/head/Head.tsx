import { Logo } from "../logo/Logo";
import s from "./Head.module.scss";
import List from "./../../assets/images/head/list.svg";
import Profile from "./../../assets/images/head/profile.svg";


export const Head = () => {
    return (
        <div className={s.head}>
            <Logo/>
        </div>
    )
}