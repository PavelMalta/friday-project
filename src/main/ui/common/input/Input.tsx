import s from "./Input.module.scss";
import Eye from "./../../assets/images/loginPage/eye.svg";
import EyeHide from "./../../assets/images/loginPage/eyeHide.svg";



export const Input = (props: any) => {
    return (
        <form className={s.wrapper} style= {props.style}>
            <label className={s.label}>{props.title}</label>
            <input className={s.input__item}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}></input>
        
                    <img src={Eye} className={s.icon}/>
                    {/* <img src={EyeHide} className={s.icon}/>  перечеркнутый глаз */}

        </form>
    )
}