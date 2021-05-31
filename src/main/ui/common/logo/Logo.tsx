import s from "./Logo.module.scss";

export const Logo = (props: any) => {
    return (
        <a className={s.logo} style={props.style} href="#">It-incubator</a>                  
    )
}