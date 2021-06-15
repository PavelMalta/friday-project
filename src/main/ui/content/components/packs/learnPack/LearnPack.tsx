import React, {useEffect, useState} from "react";
import s from "./LearnPack.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../store/store";
import {CardsType} from "../../cards/api-cards";
import {useParams} from "react-router-dom";
import {getCardsTC} from "../../../../../store/cards-reducer";

const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (cards: CardsType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}

export const LearnPack = (props: any) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);

    const cardsData = useSelector<AppRootStateType, Array<CardsType>>(state => state.cards.cardsTableData.cards)
    const {packId} = useParams<{ packId: string }>()
    const dispatch = useDispatch()

    const [card, setCard] = useState<CardsType>({
        _id: 'fake',
        cardsPack_id: '',

        answer: 'answer fake',
        question: 'question fake',
        grade: 0,
        shots: 0,

        type: '',
        rating: 0,
        user_id: '',

        created: '',
        updated: '',
    });


    useEffect(() => {
       if (first) {
           dispatch(getCardsTC({cardsPack_id: packId}))
           setFirst(false)
       }
       if (cardsData.length > 0) {
           setCard(getCard(cardsData))
       }

       return () => {
           console.log("off")
       }

    },[dispatch, packId, cardsData, first])


    const packName = useSelector<AppRootStateType, string>(state => state.cards.packName)

    return (
        <div className={s.container}>
            <div className={s.cardQuestion}>
                <h2>Learn {packName}</h2>
                <div>Question: {card.question}</div>
                <div className={s.buttonContainer}>
                    <button>Cancel</button>
                    <button>Show answer</button>
                </div>
            </div>
        </div>
    )
}

