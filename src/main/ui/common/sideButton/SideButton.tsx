import s from "./SideButton.module.scss";

export const SideButton = (props: any) => {
    return (
        <div className={s.sideButton}>
            <button className={s.btnActive} onClick={props.onClickMyButton}>My</button>
            <button className={s.btn} onClick={props.onClickAllButton}>All</button>
        </div>
    )
}