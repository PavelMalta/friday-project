import { Button } from "../../../../../common/button/Button";
import { TitleH2 } from "../../../../../common/titleh2/TitleH2";
import s from "./QuestionAnswer.module.scss";
import React from "react";
import { routes } from "../../../../../../router/routes";
import { NavLink } from "react-router-dom";

type QuestionAnswerPropsType = {
    packName: string
    question: string
    answer: string
    nextHandler: () => void
    changeInputValue: (range: number) => void
    disabledButton: boolean
}

export const QuestionAnswer: React.FC<QuestionAnswerPropsType> = (
    { packName, question, answer, nextHandler, changeInputValue, disabledButton }
) => {
    return (
        <div className={s.question}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <TitleH2 value={`Learn “${packName}”`}
                    />
                    <div className={s.container}>
                        <p className={s.text1}>
                            <span className={s.span}>Question:</span>
                            “{question}”
                        </p>
                        <p className={s.text2}>
                            <span className={s.span}>Answer:</span>
                            “{answer}”
                        </p>
                    </div>

                    <div className={s.radioButton}>
                        <h4 className={s.title}>Rate yourself:</h4>
                        <div className={s.radio}>
                            <input className={s.radioInput}
                                name="radio"
                                type="radio"
                                id="radio_1"
                                onChange={() => { changeInputValue(1) }}
                            />
                            <label className={s.radioLabel} htmlFor="radio_1">Did not know</label>
                        </div>
                        <div className={s.radio}>
                            <input className={s.radioInput}
                                name="radio"
                                type="radio"
                                id="radio_2"
                                onChange={() => { changeInputValue(2) }}
                            />
                            <label className={s.radioLabel} htmlFor="radio_2">Forgot</label>
                        </div>
                        <div className={s.radio}>
                            <input className={s.radioInput}
                                name="radio"
                                type="radio"
                                id="radio_3"
                                onChange={() => { changeInputValue(3) }}
                            />
                            <label className={s.radioLabel} htmlFor="radio_3">A lot of thought</label>
                        </div>
                        <div className={s.radio}>
                            <input className={s.radioInput}
                                name="radio"
                                type="radio"
                                id="radio_4"
                                onChange={() => { changeInputValue(4) }}
                            />
                            <label className={s.radioLabel} htmlFor="radio_4">Сonfused</label>
                        </div>
                        <div className={s.radio}>
                            <input className={s.radioInput}
                                name="radio"
                                type="radio"
                                id="radio_5"
                                onChange={() => { changeInputValue(5) }}
                            />
                            <label className={s.radioLabel} htmlFor="radio_5">Knew the answer</label>
                        </div>
                    </div>

                    <div className={s.btn}>
                        <NavLink to={routes.packs}>
                            <Button
                                style={{ width: "125px", backgroundColor: "#D7D8EF", color: "#21268F" }}
                                value="Cancel"
                                onClick={() => {
                                }}
                            />
                        </NavLink>
                        <Button
                            style={{ width: "187px" }}
                            value="Next"
                            onClick={nextHandler}
                            disabledButton={disabledButton}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}