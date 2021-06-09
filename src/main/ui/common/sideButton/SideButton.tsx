import s from "./SideButton.module.scss";

export const SideButton = () => {
    return (
        <div className={s.sideButton}>
            <button className={s.btnActive}>My</button>
            <button className={s.btn}>All</button>
        </div>
    )
}