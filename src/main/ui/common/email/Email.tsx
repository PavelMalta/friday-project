import s from "./Email.module.scss";


export const Email  = (props: any) => {
    return (
        <form className={s.wrapper}>
            <label className={s.label} htmlFor="email">{props.title}</label>
            <input className={s.input__item} 
                type="email" 
                name="email" 
                placeholder={props.placeholder}></input>
        </form>
    )
}