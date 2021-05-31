import { Eye } from "../eye/Eye";
import s from "./Input.module.scss";




export const Input = (props: any) => {
    return (
        <form className={s.wrapper} style= {props.style}>
            <label className={s.label}>{props.title}</label>
            <input className={s.input__item}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}></input>

            {/* Глазик чекбокс */}
            <div className={s.checkbox}>
                <input className={s.checkboxInput} type="checkbox" id={props.id}/>
                <label className={s.checkboxLable} htmlFor={props.htmlFor}></label>
            </div>

                {/* Не получается заюзать((( */}
                {/* <Eye  
                    id= "checkbox2"  
                    htmlFor= "checkbox2"
                /> */}

            <span className={s.span}>Input error</span>
        </form>
    )
}