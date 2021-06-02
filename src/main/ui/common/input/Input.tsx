import s from "./Input.module.scss";
import { ChangeEvent } from "react";

type InputPropsType = {
    title?: string
    type?: string
    name?: string
    value?: string
    style?: {}
    placeholder?: string
    onChange?:(string: string)=> void
    id?: string
    htmlFor?: string
    error?: string | null
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.currentTarget.value)
    }

    return (
        <form className={s.wrapper} style={props.style}>
            <label className={s.label}>{props.title}</label>
            <input className={s.input__item}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={onChangeHandler}/>

            {/* Глазик чекбокс */}
            <div className={s.checkbox}>
                <input className={s.checkboxInput} type="checkbox" id={props.id}/>
                <label className={s.checkboxLable} htmlFor={props.htmlFor}></label>
            </div>
            
            {/* Ошибка при неверных данных */}
            <span className={s.span}>{props.error !== null ? <span>{props.error}</span> : null}</span>
        </form>
    )
}