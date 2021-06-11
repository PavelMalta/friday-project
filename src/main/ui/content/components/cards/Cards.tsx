import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCardTC, deleteCardTC, getCardsTC, updateCardTC} from "../../../../store/cards-reducer";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";
import {CardsList} from "./cardsList/CardsList";
import {getPacksTC} from "../../../../store/packs-reducer";
import {SelectValueType} from "../packs/Packs";



export const Cards = () => {

    const [options, setOptions] = useState<SelectValueType>(10)

    const userID = useSelector<AppRootStateType, string>(state => state.login.userID)
    const cardsPackId = useSelector<AppRootStateType, string>(state => state.cards.cardsPackId)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardsTC({cardsPack_id: cardsPackId, pageCount: 10}))
    }, [dispatch, options])

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

    const onChangePage = (page: number) => {
        dispatch(getCardsTC({cardsPack_id: cardsPackId,pageCount: options, page: page}))
    }

    const onChangeOption = (value: SelectValueType) => {
        setOptions(value)
    }

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <button onClick={addCards}>Add cards</button>
            {/*<CardsTable userID={userID}
                        deleteCard={deleteCard}
                        updateCard={updateCard}
            />*/}
            <CardsList userID={userID}
                       deleteCard={deleteCard}
                       updateCard={updateCard}
                       onChangePage={onChangePage}
            />
        </div>
    )
}