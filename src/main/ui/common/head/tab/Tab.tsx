import s from "./Tab.module.scss";
import List from "./../../../assets/images/head/packList.svg";
import Profile from "./../../../assets/images/head/profole.svg";


export const Tab = () => {
    return (
        <div className={s.wrapper}>
        <button className={s.btn}>
            <img className={s.icon} src= {List} alt="icon list"/>
            <span className={s.span}>Packs list</span>
        </button>
        <button className={s.btn}>
            <img className={s.icon} src= {Profile} alt="icon list"/>
            <span className={s.span}>Profile</span>
        </button>
        </div>
    )
}