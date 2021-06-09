import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../store/store";
import {CardsResponseType} from "../api-cards";
import s from "./CardsTable.module.css"
import {v1} from "uuid";

type CardsTableType = {
    userID: string
    deleteCard: (cardID: string) => void
    updateCard: (cardID: string) => void
}

export const CardsTable = (props: CardsTableType) => {

    const cardsData = useSelector<AppRootStateType, CardsResponseType>(state => state.cards.cardsTableData)

    const formatDate = (date: string): string => {
        return new Date(date).toLocaleDateString("ru", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        })
    }

    return (
        <div>
            {cardsData.cards.map((item) => {
                    return (
                        <div key={v1()} className={s.row}>
                            <div className={s.item}>
                                {item.question}
                            </div>
                            <div className={s.item}>
                                {item.answer}
                            </div>
                            <div className={s.item}>
                                {formatDate(item.updated)}
                            </div>
                            <div className={s.item}>
                                {item.grade}
                            </div>
                            {item.user_id === props.userID
                                ? <div>
                                    <button onClick={() => {props.deleteCard(item._id)}}>Delete</button>
                                    <button onClick={() => {props.updateCard(item._id)}}>Edit</button>
                                </div>
                                : <div></div>
                            }
                        </div>
                    )
                }
            )
            }
        </div>
    )
}