import React, {useState} from "react";
import {Redirect, useParams, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateCardTC} from "../../../../../store/cards-reducer";
import {AppRootStateType} from "../../../../../store/store";
import {routes} from "../../../../../router/routes";


export const UpdateArea = () => {

    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const {cardID} = useParams<{ cardID: string }>();
    const cardsPackId = useSelector<AppRootStateType, string>(state => state.cards.cardsPackId)
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(updateCardTC({_id: cardID, question: question, answer: answer}, {
            cardsPack_id: cardsPackId,
            pageCount: 100
        }));
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