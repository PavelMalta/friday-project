import { Button } from "../../../../../common/button/Button";
import { TitleH2 } from "../../../../../common/titleh2/TitleH2";
import s from "./QuestionAnswer.module.scss";

export const QuestionAnswer = (props:any) => {
    return (
        <div className={s.question}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <TitleH2 value="Learn “Pack Name”"
                    />
                    <p className={s.text1}>
                        <span className={s.span}>Question:</span>
                        “How "This" works in JavaScript?”
                    </p>
                    <p className={s.text2}>
                        <span className={s.span}>Answer:</span>
                        “This is how "This" works in JavaScript”
                    </p>

                    <div className={s.radioButton}>
                        <h4 className={s.title}>Rate yourself:</h4>
                        <div className={s.radio}>
                            <input className={s.radioInput} name="radio" type="radio" id="radio_1"/>
                            <label className={s.radioLabel} htmlFor="radio_1">Did not know</label>
                        </div>
                        <div className={s.radio}>
                            <input className={s.radioInput} name="radio" type="radio" id="radio_2"/>
                            <label className={s.radioLabel} htmlFor="radio_2">Forgot</label>
                        </div>
                        <div className={s.radio}>
                            <input className={s.radioInput} name="radio" type="radio" id="radio_3"/>
                            <label className={s.radioLabel} htmlFor="radio_3">A lot of thought</label>
                        </div>
                        <div className={s.radio}>
                            <input className={s.radioInput} name="radio" type="radio" id="radio_4"/>
                            <label className={s.radioLabel} htmlFor="radio_4">Сonfused</label>
                        </div>
                        <div className={s.radio}>
                            <input className={s.radioInput} name="radio" type="radio" id="radio_5"/>
                            <label className={s.radioLabel} htmlFor="radio_5">Knew the answer</label>
                        </div>
                    </div>

                    <div className={s.btn}>
                        <Button
                            style={{width: "125px", backgroundColor: "#D7D8EF", color: "#21268F"}}
                            value="Cancel"
                            onClick={props.onclickHandler}
                        />
                        <Button
                            style={{width: "187px"}}
                            value="Next"
                            onClick={props.onclickHandler}
                        />
                    </div>
                    
                </div>
            </div>  
        </div>
    )
}