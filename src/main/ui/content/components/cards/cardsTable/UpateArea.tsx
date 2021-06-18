import React, {useState} from "react";
import {Redirect, useParams, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC, updateCardTC} from "../../../../../store/cards-reducer";
import {AppRootStateType} from "../../../../../store/store";
import {routes} from "../../../../../router/routes";


export const UpdateArea = () => {

    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const {cardID} = useParams<{ cardID: string }>();
    const cardsPackId = useSelector<AppRootStateType, string>(state => state.cards.cardsPackId)
    const dispatch = useDispatch();

    const newCardPayload = {
        cardsPack_id: cardsPackId,
        question: question,
        answer: answer
    }

    const onClickHandler = () => {
        debugger
        dispatch(updateCardTC({_id: cardID, question: question, answer: answer}, {
            cardsPack_id: cardsPackId,
            cardQuestion: question,
            cardAnswer: answer,
            pageCount: 100
        }));
        dispatch(getCardsTC({cardsPack_id: cardsPackId}))
    }

    return (
        <div>
            <div>Ur question</div>
            <textarea value={question} onChange={(e) => {
                setQuestion(e.currentTarget.value)
            }}/>
            <div>Answer the question</div>
            <textarea value={answer} onChange={(e) => {
                setAnswer(e.currentTarget.value)
            }}/>
            <NavLink to={routes.cards}>
                <button onClick={onClickHandler}>send</button>
            </NavLink>
        </div>
    )
}