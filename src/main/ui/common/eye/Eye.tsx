import s from "./Eye.module.scss";

export const Eye = (props: any) => {
    return (
        <div className={s.checkbox}>
            <input className={s.checkboxInput} type="checkbox" id={props.id}/>
            <label className={s.checkboxLable} htmlFor={props.htmlFor}></label>
        </div>
    )
}