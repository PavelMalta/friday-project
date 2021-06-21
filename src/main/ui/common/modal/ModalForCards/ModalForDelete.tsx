import React from 'react';
import Modal from '../Modal';
import {Actions} from "../../actions/Actions";


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
        <Modal active={active} setActive={setActive} modalTitle={modalTitle}>

            Do you really want to remove <b>Pack Name -{title} ?</b>
            All Cards will be excluded from this course.
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <Actions onClick={deleteModalHandlerNo} value={"Cancel"}/>
                <Actions onClick={onClickDeletePack} value={"Delete"}
                        style={{backgroundColor: "#F1453D", color: "#fff"}}/>
            </div>
        </Modal>
    </div>

}

export default ModalForDelete;