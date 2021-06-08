import React from 'react';
import {useDispatch} from "react-redux";
import {getCardsTC} from "../../../../store/cards-reducer";
import {CardsTable} from "./cardsTable/CardsTable";


export const Cards = () => {

  /*  const dispatch = useDispatch()

    const getCards = () => {
        dispatch(getCardsTC({cardsPack_id: '607ad8c3987db05080bd25a3', pageCount: 100}))
    }*/


    return (
        <div>
          {/*  <button onClick={getCards}>get cards</button>*/}
            <CardsTable/>
        </div>
    )
}