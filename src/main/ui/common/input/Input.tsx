import s from "./Input.module.scss";
import Eye from "./../../assets/images/loginPage/eye.svg";
import EyeHide from "./../../assets/images/loginPage/eyeHide.svg";
import {ChangeEvent} from "react";


export const Input = (props: any) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
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

            <img src={Eye} className={s.icon}/>
            {/* <img src={EyeHide} className={s.icon}/>  перечеркнутый глаз */}

        </form>
    )
}