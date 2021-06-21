import HalfRating from "../../../../../common/rating/Rating";
import React, {useState} from "react";
import {UpdateAreaModal} from "../../cardsTable/UpateAreaModal";
import {useDispatch} from "react-redux";
import {updateCardTC} from "../../../../../../store/cards-reducer";

type StringTablePNType = {
    value1: string
    value2: string
    value3: string
    grade: number
    id: string
    packID: string
}

export const StringTablePN = React.memo((props: StringTablePNType) => {

    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const [active, setActive] = useState<boolean>(false);
    const dispatch = useDispatch();

    const onDoubleClickHandler = () => {
        setActive(true)
    }

    const updateCard = () => {
        dispatch(updateCardTC({_id: props.id, question: question, answer: answer}, {
            cardsPack_id: props.packID,
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
                <HalfRating grade={props.grade} id={props.id}/>
            </td>
            <UpdateAreaModal
                active={active}
                setActive={setActive}
                setAnswer={setAnswer}
                setQuestion={setQuestion}
                updateCardHandler={updateCard}
                question={question}
                answer={answer}/>
        </tr>
    )
})