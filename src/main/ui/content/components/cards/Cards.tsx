import React from 'react';
import {useDispatch} from "react-redux";
import {addCardTC, deleteCardTC, getCardsTC} from "../../../../store/cards-reducer";
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

    const deleteCard = (cardID: string) => {
        dispatch(deleteCardTC(cardID, {cardsPack_id: '60bf750b73a1060004ae9189', pageCount: 100}))
    }

    return (
        <div>
            <button onClick={addCards}>Add cards</button>
            <CardsTable deleteCard={deleteCard}
            />
        </div>
    )
}