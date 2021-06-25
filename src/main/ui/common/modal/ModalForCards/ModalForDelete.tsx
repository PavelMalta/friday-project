import s from "./ModalForDelete.module.scss";
import React from 'react';
import Modal from '../Modal';

import { Button } from "../../button/Button";



type ModalDeletePropsType = {
    active: boolean,
    title: string,
    modalTitle: string,
    setActive: (active: boolean) => void,
    onClickDeletePack: () => void
}

const ModalForDelete: React.FC<ModalDeletePropsType> = (

    {title, modalTitle, onClickDeletePack, setActive, active}
    ) => {
    const deleteModalHandlerNo = () => {
        setActive(false)
    }

    return <div>
        <Modal active={active} setActive={setActive}>
            <div className={s.content}>
                <div className={s.text}>
                    Do you really want to remove
                    <span className={s.span}>Pack Name - {title}?</span>
                    All Cards will be excluded from this course.
                </div>
                <div className={s.btn}>
                    <Button onClick={deleteModalHandlerNo} value={"Cancel"}
                        style={{ backgroundColor: "#D7D8EF", color: "#21268F", width: "124px" }}
                    />
                    <Button onClick={onClickDeletePack} value={"Delete"}
                        style={{ backgroundColor: "#F1453D", color: "#ECECF9", width: "124px" }} />
                </div>
            </div>

        </Modal>
    </div>

}

export default ModalForDelete;