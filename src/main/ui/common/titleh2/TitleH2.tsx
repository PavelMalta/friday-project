import s from "./TitleH2.module.scss";

export const TitleH2 = (props: any) => {
    return (
        <h2 className={s.title} style={props.style}>Sign In</h2>                 
    )
}