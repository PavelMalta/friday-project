import React from "react";
import s from "./LearnPack.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../store/store";
import {CardsType} from "../../cards/api-cards";


export const LearnPack = (props: any) => {

    const cardsData = useSelector<AppRootStateType, Array<CardsType>>(state => state.cards.cardsTableData.cards)
    const packName = useSelector<AppRootStateType, string>(state => state.cards.packName)

    return (
        <div className={s.container}>
            <div className={s.cardQuestion}>
                 <h2>Learn {packName}</h2>
                <div>Question: {cardsData[0].question}</div>
                <div className={s.buttonContainer}>
                    <button>Cancel</button>
                    <button>Show answer</button>
                </div>
            </div>
        </div>
    )
}