import s from "./Search.module.scss";

export const Search = () => {
    return (
        <form className={s.search}>
            <input className={s.input} type="text" placeholder="Search..."></input>
        </form>
    )
}