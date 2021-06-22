import React from 'react';
import Modal from '../Modal';
import {Input} from "../../input/Input";
import {Actions} from "../../actions/Actions";
import s from "./ModalForAddPack.module.scss";


type ModalAddPropsType = {
    active: boolean,
    setActive: (active: boolean) => void
    addPackHandler: () => void,
    setNamePack: (e: string) => void,
   }

const ModalForAddPack: React.FC<ModalAddPropsType> = ({
                                                          active, setActive,
                                                          addPackHandler, setNamePack,
                                                      }) => {


    const handlerForAddNamePack = (value: string) => {
        setNamePack(value)

    }

    const addCardHandlerCancel = () => {
        setActive(false)
    }
    return <div>
        <Modal active={active} setActive={setActive}>
            <h4>Add new pack</h4>
            <p>Name pack</p>
            <Input type={'text'} onChange={handlerForAddNamePack} placeholder={'Write title here'}/>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <Actions onClick={addCardHandlerCancel} value={"Cancel"}/>
                <Actions onClick={addPackHandler} value={"Save"}
                         style={{backgroundColor: "#02169d", color: "#fff"}}/>

            </div>

        </Modal>
    </div>

}

export default ModalForAddPack;