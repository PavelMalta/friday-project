import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCardTC, deleteCardTC, updateCardTC} from "../../../../store/cards-reducer";
import {CardsTable} from "./cardsTable/CardsTable";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";


export const Cards = () => {

    const userID = useSelector<AppRootStateType, string>(state => state.login.userID)
    const cardsPackId = useSelector<AppRootStateType, string>(state => state.cards.cardsPackId)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const dispatch = useDispatch()

    const newCardPayload = {
        cardsPack_id: cardsPackId,
        question: 'Who is she?',
        answer: 'She is pokemoniha'
    }

    const addCards = () => {
        dispatch(addCardTC(newCardPayload, {cardsPack_id: cardsPackId, pageCount: 100}))
    }

    const deleteCard = (cardID: string) => {
        dispatch(deleteCardTC(cardID, {cardsPack_id: cardsPackId, pageCount: 100}))
    }

    const updateCard = (cardID: string) => {
        const updateCardPayload = {
            _id: cardID,
            question: 'What?'
        }
        dispatch(updateCardTC(updateCardPayload, {cardsPack_id: cardsPackId, pageCount: 100}))
    }

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <button onClick={addCards}>Add cards</button>
            <CardsTable userID={userID}
                        deleteCard={deleteCard}
                        updateCard={updateCard}
            />
        </div>
    )
}