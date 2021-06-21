import React from "react";
import Modal from "../../../../common/modal/Modal";

type ModalUpdateCardPropsType = {
    active: boolean,
    setActive: (active: boolean) => void
    updateCardHandler: () => void,
    setQuestion: (e: string) => void,
    setAnswer: (e: string) => void,
    question: string,
    answer: string
}
export const UpdateAreaModal = (props: ModalUpdateCardPropsType) => {

    const onClickHandler = () => {
        props.updateCardHandler()
        props.setActive(false)
    }

    return (
        <div >
            <Modal active={props.active} setActive={props.setActive}>
                <div>Ur question</div>
                <textarea rows={1} cols={50} value={props.question} onChange={(e) => {
                    props.setQuestion(e.currentTarget.value)
                }}/>
                <div>Answer the question</div>
                <textarea rows={1} cols={50} value={props.answer} onChange={(e) => {
                    props.setAnswer(e.currentTarget.value)
                }}/>
                <button onClick={onClickHandler}>send</button>
            </Modal>
        </div>
    )
}