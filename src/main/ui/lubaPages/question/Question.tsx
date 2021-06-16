import { Button } from "../../common/button/Button";
import { TitleH2 } from "../../common/titleh2/TitleH2";
import s from "./Question.module.scss";

export const Question = (props:any) => {
    return (
        <div className={s.question}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <TitleH2 value="Learn “Pack Name”"
                    />
                    <p className={s.text}>
                        <span className={s.span}>Question:</span>
                        “How "This" works in JavaScript?”
                    </p>
                    <div className={s.btn}>
                        <Button
                            style={{width: "125px", backgroundColor: "#D7D8EF", color: "#21268F"}}
                            value="Cancel"
                            onClick={props.onclickHandler}
                        />
                        <Button
                            style={{width: "187px"}}
                            value="Show answer"
                            onClick={props.onclickHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}