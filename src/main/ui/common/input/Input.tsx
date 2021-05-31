import s from "./Input.module.scss";
import Eye from "./../../assets/images/loginPage/eye.svg";
import {ChangeEvent} from "react";

type InputPropsType = {
    title?: string
    type?: string
    name?: string
    value?: string
    style?: {}
    placeholder?: string
    onChange?:(string: string)=> void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.currentTarget.value)
    }

    return (
        <form className={s.wrapper} style= {props.style}>


            <label className={s.label}>{props.title}</label>
            <input className={s.input__item}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange = {onChangeHandler}>
            </input>
        
                    <img src={Eye} className={s.icon}/>
                    {/* <img src={EyeHide} className={s.icon}/>  перечеркнутый глаз */}

        </form>
    )
}