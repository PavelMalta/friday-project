import React from "react";
import {NavLink} from "react-router-dom";
import s from "../LearnPack.module.css";
import {routes} from "../../../../../../router/routes";

type AnswerWindowPropsType = {
    packName: string
    question: string
    answer: string
    nextHandler: () => void
}

export const AnswerWindow: React.FC<AnswerWindowPropsType> = (
    {packName, question, answer, nextHandler}
) => {
    return (
        <div className={s.cardAnswer}>
            <h2>Learn {packName}</h2>
            <div>Question: {question}</div>
            <div>Answer: {answer}</div>
            <div className={s.checkboxContainer}>
                <div>
                    <input type="checkbox" onChange={() => {
                    }}/> <span>Did not know</span>
                </div>
                <div>
                    <input type="checkbox" onChange={() => {
                    }}/> <span>Forgot</span>
                </div>
                <div>
                    <input type="checkbox" onChange={() => {
                    }}/> <span>A lot of thought</span>
                </div>
                <div>
                    <input type="checkbox" onChange={() => {
                    }}/> <span>Confused</span>
                </div>
                <div>
                    <input type="checkbox" onChange={() => {
                    }}/> <span>Knew the answer</span>
                </div>
            </div>
            <div className={s.buttonContainer}>
                <NavLink to={routes.packs}>
                    <button>Cancel</button>
                </NavLink>
                <button onClick={nextHandler}>Next</button>
            </div>
        </div>
    )
}