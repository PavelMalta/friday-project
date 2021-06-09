import s from "./Error.module.scss";

export const Error = () => {
    return (
        <div className={s.error}>
            <div className={s.wrapper}>
                <span className={s.text}>
                    The page were looking for doesn’t exist
                </span>
                <button className={s.btn}>
                    GO BACK
                </button>
            </div>
        </div>
    )
}