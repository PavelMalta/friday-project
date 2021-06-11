import s from "./Search.module.scss";

export const Search = (props: any) => {
    return (
        <form className={s.search} style={props.style}>
            <input className={s.input} type="text" placeholder="Search..."></input>
        </form>
    )
}