import React from 'react';
import {useDispatch} from "react-redux";
import {addCardTC, getCardsTC} from "../../../../store/cards-reducer";
import {CardsTable} from "./cardsTable/CardsTable";


export const Cards = () => {

    const dispatch = useDispatch()

    const newCardPayload = {
        cardsPack_id: '60bf750b73a1060004ae9189',
        question: 'Who are you?',
        answer: 'I am pokemon'
    }

    const addCards = () => {
        dispatch(addCardTC(newCardPayload, {cardsPack_id: '60bf750b73a1060004ae9189', pageCount: 100}))
    }


    return (
        <div>
            <button onClick={addCards}>Add cards</button>
            <CardsTable/>
        </div>
    )
}