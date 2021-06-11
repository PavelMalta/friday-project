import s from "./Actions.module.scss";

export const Actions = (props: any) => {
    const onClickHandler = () => {
        props.onClick()
    }
    return (
        <button className={s.btn} style={props.style} onClick={onClickHandler}>
            {props.value}
        </button>
            
    )
}