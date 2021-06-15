import React from "react";
import s from "../LearnPack.module.css";

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
                    <input type="checkbox" onChange={() => {}}/> <span>Did not know</span>
                </div>
                <div>
                    <input type="checkbox" onChange={() => {}}/> <span>Forgot</span>
                </div>
                <div>
                    <input type="checkbox" onChange={() => {}}/> <span>A lot of thought</span>
                </div>
                <div>
                    <input type="checkbox" onChange={() => {}}/> <span>Confused</span>
                </div>
                <div>
                    <input type="checkbox" onChange={() => {}}/> <span>Knew the answer</span>
                </div>
            </div>
            <div className={s.buttonContainer}>
                <button>Cancel</button>
                <button onClick={nextHandler}>Next</button>
            </div>
        </div>
    )
}