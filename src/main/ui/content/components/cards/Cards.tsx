import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCardTC, deleteCardTC, getCardsTC, updateCardTC} from "../../../../store/cards-reducer";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";
import {CardsList} from "./cardsList/CardsList";
import {SelectValueType} from "../../../../store/packs-reducer";




export const Cards = () => {

    const [options, setOptions] = useState<SelectValueType>(10)

    const userID = useSelector<AppRootStateType, string>(state => state.login.userID)
    const cardsPackId = useSelector<AppRootStateType, string>(state => state.cards.cardsPackId)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardsTC({cardsPack_id: cardsPackId, pageCount: options}))
    }, [dispatch, options])

    const newCardPayload = {
        cardsPack_id: cardsPackId,
        question: 'Who?',
        answer: 'Pokemon'
    }

    const addCards = () => {
        dispatch(addCardTC(newCardPayload, {cardsPack_id: cardsPackId, pageCount: 100}))
    }

    const deleteCard = useCallback((cardID: string) => {
        dispatch(deleteCardTC(cardID, {cardsPack_id: cardsPackId, pageCount: 100}))
    },[])

    const updateCard = useCallback((cardID: string) => {
        const updateCardPayload = {
            _id: cardID,
            question: 'What?'
        }
        dispatch(updateCardTC(updateCardPayload, {cardsPack_id: cardsPackId, pageCount: 100}))
    },[])

    const onChangePage = useCallback((page: number) => {
        dispatch(getCardsTC({cardsPack_id: cardsPackId,pageCount: options, page: page}))
    },[])

    const onChangeOption = useCallback((value: SelectValueType) => {
        setOptions(value)
    },[])

    // if (!isAuth) {
    //     return <Redirect to={'/login'}/>
    // }

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
                       value={options}
                       onChangeOption={onChangeOption}
            />
        </div>
    )
}