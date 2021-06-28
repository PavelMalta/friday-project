import React from "react";
import Modal from "../../../../common/modal/Modal";
import s from "../../../../common/modal/ModalForCards/ModalForDelete.module.scss";
import {Button} from "../../../../common/button/Button";

type ModalUpdateDeletePropsType = {
    active: boolean,
    setActive: (active: boolean) => void
    deleteCard: () => void,
    modalTitle: string,
}
export const ModalForDeleteCard = (props: ModalUpdateDeletePropsType) => {

    const onDeleteClickHandler = () => {
        props.deleteCard()
        props.setActive(false)
    }

    const onCancelHandler = () => {
        props.setActive(false)
    }

    return (
        <div>
            <Modal active={props.active} setActive={props.setActive} modalTitle={props.modalTitle}>
                <div className={s.content}>
                    <div>
                        <span>Are yuo sure to delete this card?</span>
                    </div>
                    <div className={s.btn}>
                        <Button onClick={onDeleteClickHandler} value={'Delete'}/>
                        <Button onClick={onCancelHandler} value={'Cancel'}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}