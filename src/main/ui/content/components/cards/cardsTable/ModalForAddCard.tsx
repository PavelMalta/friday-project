import React from "react";
import Modal from "../../../../common/modal/Modal";
import s from "../../../../common/modal/ModalForCards/ModalForDelete.module.scss";
import {Button} from "../../../../common/button/Button";

type ModalAddCardPropsType = {
    active: boolean,
    setActive: (active: boolean) => void
    addCardHandler: () => void,
    setQuestion: (e: string) => void,
    setAnswer: (e: string) => void,
    question: string,
    answer: string,
    modalTitle: string,
}
export const ModalForAddCard = (props: ModalAddCardPropsType) => {

    const onClickHandler = () => {
        props.addCardHandler()
        props.setActive(false)
    }

    return (
        <div>
            <Modal active={props.active} setActive={props.setActive} modalTitle={props.modalTitle}>
                <div className={s.content}>
                    <div>Ur question</div>
                    <textarea rows={5} cols={50} value={props.question} className={s.area}
                              onChange={(e) => {
                                  props.setQuestion(e.currentTarget.value)
                              }}/>
                    <div>Answer the question</div>
                    <textarea rows={5} cols={50} value={props.answer} className={s.area}
                              onChange={(e) => {
                                  props.setAnswer(e.currentTarget.value)
                              }}/>
                    <div className={s.btn}>
                        <Button onClick={onClickHandler} value={'Add card'}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}