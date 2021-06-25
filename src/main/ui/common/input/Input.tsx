import s from "./Input.module.scss";
import React, {ChangeEvent, useState} from "react";

type InputPropsType = {
    title?: string
    type?: string
    name?: string
    value?: string
    style?: {}
    placeholder?: string
    onChange?: (string: string) => void
    id?: string
    htmlFor?: string
    error?: string | null
    idName?: string
    changeVision?: () => void
}

export const Input = (props: InputPropsType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.currentTarget.value)
    }

    const ChangeTextVision = () => {
        props.changeVision && props.changeVision()
    }


    return (
        <form className={s.wrapper} style={props.style}>
            <label className={s.label}>{props.title}</label>
            <input className={s.input__item}
                   type={props.type}
                   name={props.name}
                   placeholder={props.placeholder}
                   value={props.value}
                   onChange={onChangeHandler}
                   id={props.idName}>
            </input>

            {/*Глазик чекбокс*/}
            <div className={s.checkbox}>
                <div>{props.idName === 'inputPassword'
                    ? <><input className={s.checkboxInput} type="checkbox" onChange={ChangeTextVision} id={props.id}/>
                        <label className={s.checkboxLable} htmlFor={props.htmlFor}></label></>
                    : null}</div>
            </div>


            <span className={s.span}>{props.error !== null ? <span>{props.error}</span> : null}</span>
        </form>
    )
}