import React from 'react';
import {useDispatch} from "react-redux";
import {getCardsTC} from "../../../../store/cards-reducer";


export const Cards = () => {

    const dispatch = useDispatch()

    const getCards = () => {
        dispatch(getCardsTC({cardsPack_id: '5fe66bf32f93dc434098cdd7'}))
    }


    return (
        <div>
            <button onClick={getCards}>get cards</button>
        </div>
    )
}