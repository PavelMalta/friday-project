import s from "./Question.module.scss";
import {TitleH2} from "../../../../../common/titleh2/TitleH2";
import {Button} from "../../../../../common/button/Button";
import React from "react";
import {routes} from "../../../../../../router/routes";
import { NavLink } from "react-router-dom";

type QuestionPropsType = {
    packName: string
    question: string
    showAnswer: () => void
}

export const Question: React.FC<QuestionPropsType> = (
    {packName, question, showAnswer}
) => {
    return (
        <div className={s.question}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <TitleH2 value={`Learn “${packName}”`}
                    />
                    <p className={s.text}>
                        <span className={s.span}>Question:</span>
                        “{question}”
                    </p>
                    <div className={s.btn}>
                        <NavLink to={routes.packs}>
                            <Button
                                style={{width: "125px", backgroundColor: "#D7D8EF", color: "#21268F"}}
                                value="Cancel"
                                onClick={()=>{}}
                            />
                        </NavLink>
                        <Button
                            style={{width: "187px"}}
                            value="Show answer"
                            onClick={showAnswer}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}