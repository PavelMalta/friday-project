import React, {useEffect, useState} from "react";
import s from "./LearnPack.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../store/store";
import {CardsType} from "../../cards/api-cards";
import {useParams} from "react-router-dom";
import {getCardsTC, rateCardTC} from "../../../../../store/cards-reducer";
import {QuestionWindow} from "./qustionsWindow/QuestionWindow";
import {AnswerWindow} from "./answerWindow/AnswerWindow";

const getCard = (cards: CardsType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    return cards[res.id + 1];
}

export const LearnPack = () => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    const [grade, setGrade] = useState<number>(0)

    const cardsData = useSelector<AppRootStateType, Array<CardsType>>(state => state.cards.cardsTableData.cards)
    const packName = useSelector<AppRootStateType, string>(state => state.cards.packName)
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
            dispatch(getCardsTC({cardsPack_id: packId, pageCount: 100}))
            setFirst(false)
        }
        if (cardsData.length > 0) {
            setCard(getCard(cardsData))
        }

        return () => {
            console.log("off")
        }

    }, [dispatch, packId, cardsData, first])

    const showAnswerHandler = () => {
        setIsShow(true)
    }

    const nextHandler = () => {
        setIsShow(false)
        if (cardsData.length > 0) {
            dispatch(rateCardTC(grade,card._id))
            setCard(getCard(cardsData))
        }
    }

    const changeInputValue = (range: number) => {
        setGrade(range)
    }

    return (
        <div className={s.container}>
            {isShow
                ? <AnswerWindow packName={packName}
                                question={card.question}
                                answer={card.answer}
                                nextHandler={nextHandler}
                                changeInputValue={changeInputValue}
                />
                : <QuestionWindow packName={packName} question={card.question} showAnswer={showAnswerHandler}/>
            }
        </div>
    )
}

