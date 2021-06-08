import React from 'react';
import {useDispatch} from "react-redux";
import {addCardTC, deleteCardTC, updateCardTC} from "../../../../store/cards-reducer";
import {CardsTable} from "./cardsTable/CardsTable";


export const Cards = () => {

    const dispatch = useDispatch()

    const newCardPayload = {
        cardsPack_id: '60bf750b73a1060004ae9189',
        question: 'Who is she?',
        answer: 'She is pokemoniha'
    }

    const addCards = () => {
        dispatch(addCardTC(newCardPayload, {cardsPack_id: '60bf750b73a1060004ae9189', pageCount: 100}))
    }

    const deleteCard = (cardID: string) => {
        dispatch(deleteCardTC(cardID, {cardsPack_id: '60bf750b73a1060004ae9189', pageCount: 100}))
    }

    const updateCard = (cardID: string) => {
        const updateCardPayload = {
            _id: cardID,
            question: 'What?'
        }
        dispatch(updateCardTC(updateCardPayload, {cardsPack_id: '60bf750b73a1060004ae9189', pageCount: 100}))
    }

    return (
        <div>
            <button onClick={addCards}>Add cards</button>
            <CardsTable deleteCard={deleteCard}
                        updateCard={updateCard}
            />
        </div>
    )
}