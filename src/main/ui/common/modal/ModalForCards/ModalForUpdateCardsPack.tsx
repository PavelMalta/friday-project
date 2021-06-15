import React from 'react';
import Modal from '../Modal';
import {Input} from "../../input/Input";
import {Actions} from "../../actions/Actions";


type ModalUpdatePropsType = {
    active: boolean,
    setActive: (active: boolean) => void,
    setTitleCard: (t: string) => void,
    onClickUpdatePack: () => void
}

const ModalForUpdateCardsPack: React.FC<ModalUpdatePropsType> = ({setActive, active, setTitleCard, onClickUpdatePack}) => {

    const handlerForUpdateTitleCard = (value: string) => {
        setTitleCard(value)
    }
    const updateModalHandlerCancel = () => {
        setActive(false)
    }
    return <div>
        <Modal active={active} setActive={setActive}>
            <h4>Edit Pack</h4>
            <Input type={'text'} onChange={handlerForUpdateTitleCard} placeholder={'Write a new title for pack'}/>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <Actions onClick={updateModalHandlerCancel} value={"Cancel"}/>
                <Actions onClick={onClickUpdatePack} value={"Update"}
                         style={{backgroundColor: "#050e99", color: "#fff"}}/>

            </div>

        </Modal>
    </div>
}

export default ModalForUpdateCardsPack;