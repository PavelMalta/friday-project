import React from "react";
import s from "../LearnPack.module.css";
import {routes} from "../../../../../../router/routes";
import {NavLink} from "react-router-dom";

type QuestionWindowPropsType = {
    packName: string
    question: string
    showAnswer: () => void
}

export const QuestionWindow: React.FC<QuestionWindowPropsType> = (
    {packName, question, showAnswer}
) => {
    return (
        <div className={s.cardQuestion}>
            <h2>Learn {packName}</h2>
            <div>Question: {question}</div>
            <div className={s.buttonContainer}>
                <NavLink to={routes.packs}>
                    <button>Cancel</button>
                </NavLink>
                <button onClick={showAnswer}>Show answer</button>
            </div>
        </div>
    )
}