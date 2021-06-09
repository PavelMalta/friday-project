import s from "./Actions.module.scss";

export const Actions = (props: any) => {
    return (
        <button className={s.btn} style={props.style}>
            {props.value}
        </button>
            
    )
}