import HalfRating from "../../../../../common/rating/Rating";
import React, {useState} from "react";
import {ModalForEditCard} from "../../cardsTable/ModalForEditCard";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../../store/store";
import {deleteCardTC, updateCardTC} from "../../../../../../store/cards-reducer";
import ModalForDelete from "../../../../../common/modal/ModalForCards/ModalForDelete";
import {ModalForDeleteCard} from "../../cardsTable/ModalForDeleteCard";

type StringTablePNType = {
    value1: string
    value2: string
    value3: string
    grade: number
    id: string
    userID: string
}

export const StringTablePN = React.memo((props: StringTablePNType) => {
    // hooks for edit packs
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const [active, setActive] = useState<boolean>(false);

    // hooks for delete card
    const [activeForDelete, setActiveForDelete] = useState<boolean>(false);


    const cardsPackId = useSelector<AppRootStateType, string>(state => state.cards.cardsPackId)
    const userID = useSelector<AppRootStateType, string>(state => state.login.userID)
    const dispatch = useDispatch();

    const onDoubleClickHandler = () => {
        if (userID === props.userID) {
            setActive(true)
        }
    }

    const deleteCard = () => {
            dispatch(deleteCardTC(props.id, {
                cardsPack_id: cardsPackId
            }))
    }

    const updateCard = () => {
        dispatch(updateCardTC({_id: props.id, question: question, answer: answer}, {
            cardsPack_id: cardsPackId,
            cardQuestion: question,
            cardAnswer: answer,
            pageCount: 100
        }));

    }

    return (
        <tr onDoubleClick={onDoubleClickHandler}>
            <td>{props.value1}</td>
            <td>{props.value2}</td>
            <td>{props.value3}</td>
            <td>
                {userID === props.userID && <button onClick={() => setActiveForDelete(true)}>delete</button>}</td>
            <td>
                <HalfRating grade={props.grade} id={props.id}/>
            </td>
            <ModalForDeleteCard active={activeForDelete}
                                modalTitle={'Are yuo sure to delete this card?'}
                                setActive={setActiveForDelete}
                                deleteCard={deleteCard}/>
            <ModalForEditCard
                active={active}
                setActive={setActive}
                setAnswer={setAnswer}
                setQuestion={setQuestion}
                updateCardHandler={updateCard}
                question={question}
                answer={answer}
                modalTitle={'Type ur answer & question'}/>

        </tr>
    )
})